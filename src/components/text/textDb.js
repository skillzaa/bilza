import CompDb from "../../compDb/compDb.js";
import Text from "./text.js";
import { AniNumberDb, AniStringDb, AniBooleanDb } from "../../animations/animations.js";
import { FontFamily } from "../../pack/fontFamily.js";
import toPerc from "../../functions/toPerc.js";
export default class TextDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, charsWidth, content, color) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.content = new AniStringDb(content);
        this.fontFamily = FontFamily.Calibri;
        this.maxDisplayChars = new AniNumberDb(500);
        this.fitToWidth = new AniBooleanDb(false);
        this.charsWidth = charsWidth;
        this.color.set(color);
        this._oldWidth = null;
        this._oldHeight = null;
        this.heightFineTune = 5;
    }
    contentHeight() {
        let heightInPic = this.charsWidth("W", this.getFontSize(), this.fontFamily);
        return toPerc(heightInPic, this.canvasHeight());
    }
    contentWidth() {
        let widthInPix = this.charsWidth(this.content.value().substring(0, this.maxDisplayChars.value()), this.getFontSize(), this.fontFamily);
        return toPerc(widthInPix, this.canvasWidth());
    }
    getEngineComp(pack) {
        const comp = new Text(this, pack);
        return comp;
    }
    getFontSize() {
        if (this.fitToWidth.value() == true) {
            if (this.hasWidthChanged() == true) {
                return this.widthFontSize();
            }
        }
        return this.heightFontSize();
    }
    widthFontSize() {
        const reqWdInPix = (this.width.value());
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = this.charsWidth(this.content.value(), i, this.fontFamily);
            if (newWidthInPix >= (reqWdInPix)) {
                return i;
            }
        }
        return 666;
    }
    heightFontSize() {
        return this.height.value() +
            ((this.height.value() / 100) * this.heightFineTune);
    }
    hasWidthChanged() {
        if (this._oldWidth == null) {
            this._oldWidth = this.width.value();
            return true;
        }
        else {
            if (this._oldWidth == this.width.value()) {
                return false;
            }
            else {
                this._oldWidth = this.width.value();
                return true;
            }
        }
    }
}

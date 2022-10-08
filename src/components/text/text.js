import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, AniString, AniBoolean, } from "../../animations/animations.js";
import toPerc from "../../functions/toPerc.js";
export default class Text extends CompEngine {
    constructor(propsDb, pack) {
        super(propsDb, pack);
        this.content = new AniString(propsDb.content);
        this.maxDisplayChars = new AniNumber(propsDb.maxDisplayChars);
        this.fontFamily = propsDb.fontFamily;
        this.fitToWidth = new AniBoolean(propsDb.fitToWidth);
        this.drawLayer = 2;
        this._oldWidth = null;
        this._oldHeight = null;
        this.heightFineTune = 5;
        this.color.set(propsDb.color.value());
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.content.update(msDelta);
        this.maxDisplayChars.update(msDelta);
        this.fitToWidth.update(msDelta);
        return true;
    }
    contentHeight() {
        let heightInPic = this.charsWidth("W", this.getFontSize(), this.fontFamily);
        return toPerc(heightInPic, this.canvasHeight());
    }
    contentWidth() {
        let widthInPix = this.charsWidth(this.content.value().substring(0, this.maxDisplayChars.value()), this.getFontSize(), this.fontFamily);
        return toPerc(widthInPix, this.canvasWidth());
    }
    draw(p) {
        this.preDraw(p);
        this.drawContent(p);
        this.postDraw(p);
        return true;
    }
    drawContent(p) {
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.fontSize = this.getFontSize();
        this.style.fontFamily = this.fontFamily;
        p.drawText(this.content.value().substring(0, this.maxDisplayChars.value()), this.contentX(), this.contentY(), this.style);
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
        this.style.fontSize = this.getFontSize();
        this.style.fontFamily = this.fontFamily;
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = this.charsWidth(this.content.value(), i, this.style.fontFamily);
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

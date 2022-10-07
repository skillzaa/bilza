import CompDb from "../../compDb/compDb.js";
import Text from "./text.js";
import { AniNumberDb, AniStringDb, AniBooleanDb } from "../../animationsFacade/animationsDb.js";
import { FontFamily } from "../../pack/fontFamily.js";
export default class TextDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, charsWidth, content, color) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.content = new AniStringDb(content);
        this.fontFamily = FontFamily.Calibri;
        this.maxDisplayChars = new AniNumberDb(200);
        this.fontSize = new AniNumberDb(40);
        this.fitToWidth = new AniBooleanDb(false);
        this.fitToHeight = new AniBooleanDb(false);
        this.respFontSize = new AniBooleanDb(true);
        this.charsWidth = charsWidth;
        this.color.set(color);
    }
    contentHeight() {
        if (this.maxDisplayChars.value() < 1) {
            return 0;
        }
        return this.charsWidth("W", this.fontSize.value(), this.fontFamily);
    }
    contentWidth() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        return this.charsWidth(this.content.value().substring(0, this.maxDisplayChars.value()), this.fontSize.value(), this.fontFamily);
    }
    getEngineComp(pack) {
        const comp = new Text(this, pack);
        return comp;
    }
}

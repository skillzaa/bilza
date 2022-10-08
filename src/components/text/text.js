import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, AniString, AniBoolean, } from "../../animations/animations.js";
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
        this.color.set(propsDb.color.value());
        this.width.set(20);
        this.height.set(10);
        this._fontSize = this.height.value();
    }
    update(msDelta, p) {
        if (this.fitToWidth.value() == true) {
            if (this.hasWidthChanged() == true) {
                this.fitToWidthFn(p);
            }
        }
        else {
            this._fontSize = this.height.value();
        }
        super.update(msDelta, p);
        this.content.update(msDelta);
        this.maxDisplayChars.update(msDelta);
        this.fitToWidth.update(msDelta);
        return true;
    }
    contentHeight() {
        if (this.maxDisplayChars.value() < 1) {
            return 0;
        }
        return this.charsWidth("W", this._fontSize, this.fontFamily);
    }
    contentWidth() {
        return this.charsWidth(this.content.value().substring(0, this.maxDisplayChars.value()), this._fontSize, this.fontFamily);
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
        this.style.fontSize = this._fontSize;
        this.style.fontFamily = this.fontFamily;
        p.drawText(this.content.value().substring(0, this.maxDisplayChars.value()), this.contentX(), this.contentY(), this.style);
    }
    fitToWidthFn(p) {
        const reqWdInPix = (this.width.value());
        this.style.fontSize = this.height.value();
        this.style.fontFamily = this.fontFamily;
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = p.charsWidth(this.content.value(), i, this.style.fontFamily);
            if (newWidthInPix >= (reqWdInPix)) {
                this.height.set(i);
                this.style.fontSize = i;
                return this.height.value();
            }
        }
        return null;
    }
    fitToHeightFn(p) {
        const reqHtInPix = (this.height.value()) * 1.12;
        this.height.set(reqHtInPix);
        this.style.fontSize = this.height.value();
        return reqHtInPix;
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
    hasHeightChanged() {
        if (this._oldHeight == null) {
            this._oldHeight = this.height.value();
            return true;
        }
        else {
            if (this._oldHeight == this.height.value()) {
                return false;
            }
            else {
                this._oldHeight = this.height.value();
                return true;
            }
        }
    }
}

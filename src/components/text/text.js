import { BaseComponent, DrawLayer, FontFamily } from "../../bilza.js";
import { AniNumber, AniString, AniBoolean, } from "../../animationModule/animations.js";
import TextTempl from "./textTempl.js";
import TextTheme from "./textTheme.js";
export default class Text extends BaseComponent {
    constructor(content = "", colorHax = "#000000") {
        super();
        this.content = new AniString(content);
        this.fontSize = new AniNumber(20);
        this.maxDisplayChars = new AniNumber(1000);
        this.fontFamily = FontFamily.Calibri;
        this.fitToWidth = new AniBoolean(false);
        this.fitToHeight = new AniBoolean(false);
        this.respFontSize = new AniBoolean(true);
        this.drawLayer = DrawLayer.MiddleGround;
        this.templ = new TextTempl(this);
        this.theme = new TextTheme(this);
        this._oldWidth = null;
        this._oldHeight = null;
        this.color.set(colorHax);
        this.width.set(300);
        this.height.set(300);
    }
    update(msDelta, p) {
        if (this.fitToHeight.value() == true) {
            if (this.hasHeightChanged() == true) {
                this.fitToHeightFn(p);
            }
        }
        else {
            this.shrinkToHeightFn(p);
        }
        if (this.fitToWidth.value() == true) {
            if (this.hasWidthChanged() == true) {
                this.fitToWidthFn(p);
            }
        }
        else {
            this.shrinkToWidthFn(p);
        }
        super.update(msDelta, p);
        if (this.fitToWidth.value() == false && this.fitToHeight.value() == false) {
            this.fontSize.update(msDelta);
        }
        this.content.update(msDelta);
        this.maxDisplayChars.update(msDelta);
        this.respFontSize.update(msDelta);
        this.fitToWidth.update(msDelta);
        this.fitToHeight.update(msDelta);
        return true;
    }
    contentHeight() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
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
    draw(p) {
        this.preDraw(p);
        this.drawContent(p);
        this.postDraw(p);
        return true;
    }
    drawContent(p) {
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.fontSize = this.fontSize.value();
        this.style.fontFamily = this.fontFamily;
        p.drawText(this.content.value().substring(0, this.maxDisplayChars.value()), this.contentX(), this.contentY(), this.style);
    }
    fitToWidthFn(p) {
        const reqWdInPix = (this.width.value());
        this.style.fontSize = this.fontSize.value();
        this.style.fontFamily = this.fontFamily;
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = p.charsWidth(this.content.value(), i, this.style.fontFamily);
            if (newWidthInPix >= (reqWdInPix)) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return this.fontSize.value();
            }
        }
        return null;
    }
    fitToHeightFn(p) {
        const reqHtInPix = (this.height.value()) * 1.12;
        this.fontSize.set(reqHtInPix);
        this.style.fontSize = this.fontSize.value();
        return reqHtInPix;
    }
    shrinkToHeightFn(p) {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        this.style.fontFamily = this.fontFamily;
        const reqHtInPix = (this.height.value());
        const contentHeight = this.charsWidth("W", this.fontSize.value(), this.style.fontFamily);
        if (contentHeight < reqHtInPix) {
            return true;
        }
        for (let i = 300; i > 0; i--) {
            const newHeightInPix = p.charsWidth("W", i, this.style.fontFamily);
            if (newHeightInPix <= reqHtInPix) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return true;
            }
        }
        return true;
    }
    shrinkToWidthFn(p) {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        this.style.fontFamily = this.fontFamily;
        this.style.fontSize = this.fontSize.value();
        const reqWdInPix = (this.width.value());
        const contentWidth = this.charsWidth(this.content.value(), this.fontSize.value(), this.style.fontFamily);
        if (contentWidth < reqWdInPix) {
            return true;
        }
        for (let i = 400; i > 0; i--) {
            const newWidthInPix = p.charsWidth(this.content.value(), i, this.style.fontFamily);
            if (newWidthInPix <= reqWdInPix) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return true;
            }
        }
        return true;
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

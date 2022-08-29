import { BaseComponent, DrawLayer, FontFamily } from "../bilza.js";
import { AniNumber, AniString, AniBoolean, } from "../animationModule/animations.js";
import TextTempl from "../templates/textTempl.js";
import TextTheme from "../templates/textTheme.js";
export default class Text extends BaseComponent {
    constructor(content = "", colorHax = "#000000") {
        super();
        this.content = new AniString(content);
        this.fontSize = new AniNumber(20);
        this.maxDisplayChars = new AniNumber(200);
        this.fontFamily = FontFamily.Calibri;
        this.fitToWidth = new AniBoolean(false);
        this.shrinkToHeight = new AniBoolean(false);
        this.respFontSize = new AniBoolean(true);
        this.drawLayer = DrawLayer.MiddleGround;
        this.templ = new TextTempl(this);
        this.theme = new TextTheme(this);
        this.color.set(colorHax);
    }
    update(msDelta, p) {
        if (this.fitToWidth.value() == true) {
            this.fitToWidthFn(p);
            this.fitToWidth.set(false);
        }
        if (this.shrinkToHeight.value() == true) {
            this.shrinkToHeightFn(p);
            this.shrinkToHeight.set(false);
        }
        super.update(msDelta, p);
        this.fontSize.update(msDelta);
        this.content.update(msDelta);
        this.maxDisplayChars.update(msDelta);
        return true;
    }
    contentHeight() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        if (this.maxDisplayChars.value() < 1) {
            return 0;
        }
        return this.charsWidth("W", this.adjestFontSize(this.fontSize.value()), this.fontFamily);
    }
    contentWidth() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        return this.charsWidth(this.content.value().substring(0, this.maxDisplayChars.value()), this.adjestFontSize(this.fontSize.value()), this.fontFamily);
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
        this.style.fontSize = this.adjestFontSize(this.fontSize.value());
        this.style.fontFamily = this.fontFamily;
        p.drawText(this.content.value().substring(0, this.maxDisplayChars.value()), this.contentX(), this.contentY(), this.style);
    }
    fitToWidthFn(p) {
        const reqWdInPix = (this.width.value());
        ;
        this.style.fontSize = this.fontSize.value();
        this.style.fontFamily = this.fontFamily;
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = p.charsWidth(this.content.value(), this.adjestFontSize(i), this.style.fontFamily);
            if (newWidthInPix >= (reqWdInPix)) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return this.fontSize.value();
            }
        }
        return null;
    }
    adjestFontSize(n) {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.respFontSize.value() == true) {
            return (n / 1000) * this.canvasWidth;
        }
        else {
            return n;
        }
    }
    shrinkToHeightFn(p) {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
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
}

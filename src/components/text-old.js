import { DrawLayer, BaseComponent, FontFamily } from "../bilza.js";
import { AniNumber, AniString, } from "../animationModule/animations.js";
export default class Text extends BaseComponent {
    constructor(content = "", colorHax = "#000000") {
        super();
        this.content = new AniString(content);
        this.maxDisplayChars = new AniNumber(200);
        this.fontFamily = FontFamily.Calibri;
        this.color.set(colorHax);
        this.drawLayer = DrawLayer.MiddleGround;
        this.fontSize = 50;
        this.height.set(500);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.content.update(msDelta);
        this.maxDisplayChars.update(msDelta);
        this.dynamicFontSize(p);
        this.shrinkToFitMaxHeight(p);
        super.update(msDelta, p);
        return true;
    }
    contentHeight() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        if (this.maxDisplayChars.value() < 1) {
            return 0;
        }
        return this.charsWidth("W", this.fontSize, this.fontFamily);
    }
    contentWidth() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        return this.charsWidth(this.content.value().substring(0, this.maxDisplayChars.value()), this.fontSize, this.fontFamily);
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
        this.style.fontSize = this.fontSize;
        this.style.fontFamily = this.fontFamily;
        p.drawText(this.content.value().substring(0, this.maxDisplayChars.value()), this.contentX(), this.contentY(), this.style);
    }
    dynamicFontSize(p) {
        const reqWdInPix = (p.canvasWidth() / 100 * this.width.value());
        ;
        this.style.fontSize = this.fontSize;
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = p.charsWidth(this.content.value(), i, this.style.fontFamily);
            if (newWidthInPix >= (reqWdInPix)) {
                this.fontSize = i;
                this.style.fontSize = i;
                return this.fontSize;
            }
        }
        return null;
    }
    shrinkToFitMaxHeight(p) {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const reqHtInPix = (p.canvasHeight() / 100 * this.height.value());
        const contentHeight = this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
        if (contentHeight < reqHtInPix) {
            return true;
        }
        for (let i = 300; i > 0; i--) {
            const newHeightInPix = p.charsWidth("W", i, this.style.fontFamily);
            if (newHeightInPix <= reqHtInPix) {
                this.fontSize = i;
                this.style.fontSize = i;
                return true;
            }
        }
        return true;
    }
}

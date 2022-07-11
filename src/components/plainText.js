import { AniNumber, AniColor, AniBoolean } from "../bilza.js";
import RawText from "./rawText.js";
import AniNoPerc from "../animations/aniNoPerc/AniNoPerc.js";
export default class PlainText extends RawText {
    constructor(content = "", colorHax = "#000000") {
        super(content, colorHax);
        this.paddingTop = new AniNoPerc(0);
        this.paddingBottom = new AniNoPerc(0);
        this.paddingRight = new AniNoPerc(0);
        this.paddingLeft = new AniNoPerc(0);
        this.border = new AniNumber(0);
        this.maxHeight = 500;
        this.colorBackground = new AniColor("#ffffff");
        this.colorBorder = new AniColor("#000000");
        this.showBackground = new AniBoolean(false);
    }
    init(p) {
        super.init(p);
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.paddingLeft.init(this.usePercentages, this.canvasWidth);
        this.paddingRight.init(this.usePercentages, this.canvasWidth);
        this.paddingTop.init(this.usePercentages, this.canvasHeight);
        this.paddingBottom.init(this.usePercentages, this.canvasHeight);
        return true;
    }
    update(msDelta, p) {
        this.paddingLeft.update(msDelta);
        this.paddingLeft.update(msDelta);
        this.paddingRight.update(msDelta);
        this.paddingTop.update(msDelta);
        this.paddingBottom.update(msDelta);
        super.update(msDelta, p);
        this.border.update(msDelta);
        this.colorBackground.update(msDelta);
        this.colorBorder.update(msDelta);
        return true;
    }
    widthInPix() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const canvasWdBy100 = Math.floor(this.canvasWidth / 100);
        const borderX2 = this.border.value() * 2;
        const pl = this.paddingLeft.value();
        const pr = this.paddingRight.value();
        const txt = this.charsWidth(this.content.value(), this.fontSize.value(), this.fontFamily);
        return Math.floor(pl + txt + pr + borderX2);
    }
    heightInPix() {
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const canvasHtBy100 = Math.floor(this.canvasHeight / 100);
        const borderX2 = this.border.value() * 2;
        const pt = this.paddingTop.value();
        const pb = this.paddingBottom.value();
        const txt = this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
        return Math.floor(pt + pb + txt + borderX2);
    }
    draw(p) {
        this.style.opacity = (this.opacity.value());
        this.style.fontSize = this.fontSize.value();
        this.style.fontFamily = this.fontFamily;
        this.applyRotation(p);
        if (this.showBackground.value() == true) {
            this.drawBackground(p);
        }
        if (this.border.value() > 0) {
            this.drawBorder(p);
        }
        this.drawContent(p);
        this.removeRotation(p);
        return true;
    }
    drawBackground(p) {
        this.style.fillStyle = this.colorBackground.value();
        this.style.strokeStyle = this.colorBackground.value();
        p.drawFillRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
    }
    drawBorder(p) {
        this.style.strokeStyle = this.colorBorder.value();
        this.style.fillStyle = this.colorBorder.value();
        this.style.lineWidth = this.border.value();
        p.drawRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
    }
    drawContent(p) {
        this.style.strokeStyle = this.color.value();
        this.style.fillStyle = this.color.value();
        p.drawText(this.content.value().substring(0, this.maxDisplayChars.value()), this.xAligned() + this.border.value() + this.paddingLeft.value(), this.yAligned() + this.border.value() + this.paddingTop.value(), this.style);
    }
}

import { AniNumber, AniColor } from "../bilza.js";
import RawText from "./rawText.js";
import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";
export default class Text extends RawText {
    constructor(content = "", colorHax = "#000000") {
        super(content, colorHax);
        this.paddingTop = new AniNoYPerc(0);
        this.paddingBottom = new AniNoYPerc(0);
        this.paddingRight = new AniNoXPerc(0);
        this.paddingLeft = new AniNoXPerc(0);
        this.border = new AniNumber(0);
        this.maxHeight = 500;
        this.colorBackground = new AniColor("#ffffff");
        this.colorBorder = new AniColor("#000000");
    }
    init(p) {
        super.init(p);
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.paddingLeft.init(this.usePercentages, this.canvasWidth);
        this.paddingRight.init(this.usePercentages, this.canvasWidth);
        this.paddingTop.init(this.usePercentages, this.canvasWidth);
        this.paddingBottom.init(this.usePercentages, this.canvasWidth);
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
        this.style.globalAlpha = (this.opacity.value() / 100);
        this.style.fontSize = this.fontSize.value();
        this.style.fontFamily = this.fontFamily;
        this.applyRotation(p);
        this.drawBackground(p);
        this.drawBorder(p);
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
    dynamicFontSize(p) {
        const reqWdInPix = this.reqWdInPixForFontSize(p);
        this.style.fontSize = this.fontSize.value();
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
    reqWdInPixForFontSize(p) {
        const r = (p.canvasWidth() / 100 * this.width.value());
        const s = r - (this.paddingLeft.value() + this.paddingRight.value());
        return s;
    }
    shrinkToFitMaxHeight(p) {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const reqHtInPix = (p.canvasHeight() / 100 * this.maxHeight);
        const reqHtInPixwoPad = reqHtInPix - (this.paddingTop.value() + this.paddingBottom.value());
        const contentHeight = this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
        if (contentHeight < reqHtInPixwoPad) {
            return true;
        }
        for (let i = 300; i > 0; i--) {
            const newHeightInPix = p.charsWidth("W", i, this.style.fontFamily);
            if (newHeightInPix <= reqHtInPixwoPad) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return true;
            }
        }
        return true;
    }
    applyBoth(p) {
        this.dynamicFontSize(p);
        this.shrinkToFitMaxHeight(p);
    }
}

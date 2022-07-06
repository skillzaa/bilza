import { BaseComponent, DrawLayer, FontFamily, AniNumber } from "../Bilza.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";
export default class PlainText extends BaseComponent {
    constructor(content = "", colorHax = "#000000") {
        super();
        this.content = content;
        this.fontSize = new AniNumber(50);
        this.fontFamily = FontFamily.Calibri;
        this.paddingLeft = new AniNumber(0);
        this.paddingRight = new AniNumber(0);
        this.paddingTop = new AniNumber(0);
        this.paddingBottom = new AniNumber(0);
        this.border = new AniNumber(0);
        this.colorBorder = colorHax;
        this.colorBg = lightenDarkenColor(colorHax, 225);
        this.color = colorHax;
        this.showContent = true;
        this.showBg = false;
        this.showTextShadow = false;
        this.showBgShadow = false;
        this.showBorderShadow = false;
        this.maxDisplayChars = 200;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.paddingBottom.update(msDelta);
        this.paddingLeft.update(msDelta);
        this.paddingRight.update(msDelta);
        this.paddingTop.update(msDelta);
        this.border.update(msDelta);
        this.fontSize.update(msDelta);
        return true;
    }
    heightInPix() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const textHeight = this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
        return textHeight + (this.paddingTop.value() + this.paddingBottom.value());
    }
    widthInPix() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const textWdith = this.charsWidth(this.content.substring(0, this.maxDisplayChars), this.fontSize.value(), this.fontFamily);
        return textWdith + (this.paddingLeft.value() + this.paddingRight.value());
    }
    draw(p) {
        this.style.fillStyle = this.colorBg;
        this.style.strokeStyle = this.colorBg;
        this.drawBg(p, this.style, this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix());
        this.style.fillStyle = this.colorBorder;
        this.style.strokeStyle = this.colorBorder;
        this.drawBorder(p, this.style, this.xAligned(), this.yAligned(), this.border.value(), this.widthInPix(), this.heightInPix());
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.fontSize = this.fontSize.value();
        this.style.fontFamily = this.fontFamily;
        this.drawContent(p, this.style, this.content, this.xAligned(), this.yAligned(), this.maxDisplayChars, this.paddingLeft.value(), this.paddingTop.value(), this.showContent);
        return true;
    }
    drawBorder(p, style, x, y, borderWidth, width, height) {
        if (borderWidth <= 0) {
            return false;
        }
        style.lineWidth = borderWidth;
        p.drawRect(x - Math.ceil(borderWidth / 2), y - Math.ceil(borderWidth / 2), width + (borderWidth), height + (borderWidth), style);
        return true;
    }
    drawBg(p, style, x, y, width, height) {
        p.drawFillRect(x, y, width, height, style);
        return true;
    }
    drawContent(p, style, content, x, y, maxDisplayChars, paddingLeft, paddingTop, showContent) {
        if (showContent == false) {
            return false;
        }
        p.drawText(content.substring(0, maxDisplayChars), x + paddingLeft, y + paddingTop, style);
    }
}

import { BaseComponent, DrawLayer, FontFamily, AniNumber, AniColor, AniString } from "../bilza.js";
export default class RawText extends BaseComponent {
    constructor(content = "", colorHax = "#000000") {
        super();
        this.content = new AniString(content);
        this.width.set(20);
        this.content = new AniString(content);
        this.fontSize = new AniNumber(50);
        this.maxDisplayChars = new AniNumber(200);
        this.fontFamily = FontFamily.Calibri;
        this.color = new AniColor(colorHax);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.fontSize.update(msDelta);
        this.content.update(msDelta);
        this.color.update(msDelta);
        this.maxDisplayChars.update(msDelta);
        return true;
    }
    heightInPix() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        if (this.maxDisplayChars.value() < 1) {
            return 0;
        }
        return this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
    }
    widthInPix() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        return this.charsWidth(this.content.value().substring(0, this.maxDisplayChars.value()), this.fontSize.value(), this.fontFamily);
    }
    draw(p) {
        this.style.opacity = (this.opacity.value());
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.fontSize = this.fontSize.value();
        this.style.fontFamily = this.fontFamily;
        this.applyRotation(p);
        this.drawContent(p);
        this.removeRotation(p);
        return true;
    }
    drawContent(p) {
        p.drawText(this.content.value().substring(0, this.maxDisplayChars.value()), this.xAligned(), this.yAligned(), this.style);
    }
}

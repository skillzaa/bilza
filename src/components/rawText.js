import { BaseComponent, DrawLayer, FontFamily, AniNumber, AniString } from "../bilza.js";
export default class RawText extends BaseComponent {
    constructor(content = "", colorHax = "#000000") {
        super();
        this.content = new AniString(content);
        this.fontSize = new AniNumber(50);
        this.maxDisplayChars = new AniNumber(200);
        this.fontFamily = FontFamily.Calibri;
        this.color.set(colorHax);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    update(msDelta, p) {
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
}

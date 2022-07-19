import { BaseComponent, AniNumber, FontFamily } from "../bilza.js";
export default class Icon extends BaseComponent {
    constructor(code = 9876, colorHax = "#008000") {
        super();
        this.code = code;
        this.color.set(colorHax);
        this.fontSize = new AniNumber(100);
        this.fontFamily = FontFamily.Calibri;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.fontSize.update(msDelta);
        return true;
    }
    contentHeight() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        return this.charsWidth(String.fromCharCode(this.code), this.fontSize.value(), this.fontFamily);
    }
    contentWidth() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        return this.charsWidth(String.fromCharCode(this.code), this.fontSize.value(), this.fontFamily);
    }
    draw(p) {
        this.preDraw(p);
        this.style.fontSize = this.fontSize.value();
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        p.drawIcon(this.code, this.contentX(), this.contentY(), this.style);
        this.postDraw(p);
        return true;
    }
}

import { BaseComponent, AniNumber } from "../../bilza.js";
export default class Icon extends BaseComponent {
    constructor(code = 9876, colorHax = "#008000") {
        super();
        this.code = code;
        this.color.set(colorHax);
        this.fontSize = new AniNumber(100);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.fontSize.update(msDelta);
        return true;
    }
    widthInPix() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        return this.charsWidth(this.code.toString(), this.fontSize.value(), "Arial");
    }
    heightInPix() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        return this.charsWidth("X", this.fontSize.value(), "Arial");
    }
    draw(p) {
        this.style.fontSize = this.fontSize.value();
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.applyRotation(p);
        p.drawIcon(this.code, this.xAligned(), this.yAligned(), this.style);
        this.removeRotation(p);
        return true;
    }
}

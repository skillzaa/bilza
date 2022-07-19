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
    draw(p) {
        this.style.fontSize = this.fontSize.value();
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.preDraw(p);
        p.drawIcon(this.code, this.contentX(), this.contentY(), this.style);
        this.postDraw(p);
        return true;
    }
}

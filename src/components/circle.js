import { AniBoolean, AniNumber, BaseComponent } from "../bilza.js";
export default class Circle extends BaseComponent {
    constructor(color = "#ff0000") {
        super();
        this.filled = new AniBoolean(true);
        this.startAngle = new AniNumber(0);
        this.endAngle = new AniNumber(360);
        this.color.set(color);
    }
    update(msDelta, p) {
        this.startAngle.update(msDelta);
        this.endAngle.update(msDelta);
        super.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        p.beginPath();
        p.drawCircle(this.contentX() + (this.contentWidth() / 2), this.contentY() + (this.contentWidth() / 2), (this.contentWidth() / 2), this.filled.value(), this.startAngle.value() * (Math.PI / 180), this.endAngle.value() * (Math.PI / 180), this.style);
        p.stroke();
        this.postDraw(p);
        return true;
    }
}

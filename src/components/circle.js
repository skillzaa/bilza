import { BaseComponent } from "../bilza.js";
import { AniNumber, AniBoolean, } from "../animationModule/animations.js";
export default class Circle extends BaseComponent {
    constructor(radius = 10, color = "#ff0000") {
        super();
        this.filled = new AniBoolean(true);
        this.startAngle = new AniNumber(0);
        this.endAngle = new AniNumber(360);
        this.color.set(color);
        this.width.set(Math.floor(radius * 2));
    }
    contentHeight() {
        return this.width.value();
    }
    update(msDelta, p) {
        this.startAngle.update(msDelta);
        this.endAngle.update(msDelta);
        this.height.set(this.width.value());
        super.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        p.beginPath();
        const radius = (this.width.value() / 2);
        p.drawCircle(this.contentX() + (this.width.value() / 2), this.contentY() + (this.width.value() / 2), radius, this.filled.value(), this.startAngle.value() * (Math.PI / 180), this.endAngle.value() * (Math.PI / 180), this.style);
        p.stroke();
        this.postDraw(p);
        return true;
    }
}

import Component from "../component/component.js";
import { AniNumber, AniBoolean, } from "../animations/animations.js";
export default class Circle extends Component {
    constructor(startTime, endTime, radius = 10, color = "#ff0000") {
        super(startTime, endTime);
        this.filled = new AniBoolean(true);
        this.startAngle = new AniNumber(0);
        this.endAngle = new AniNumber(360);
        this.lineWidth = new AniNumber(1);
        this.color.set(color);
        this.width.set(Math.floor(radius * 2));
    }
    contentHeight() {
        return this.width.value();
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.startAngle.update(msDelta);
        this.endAngle.update(msDelta);
        this.lineWidth.update(msDelta);
        this.height.set(this.width.value());
        return true;
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        p.beginPath();
        const radius = (this.width.value() / 2);
        p.drawCircle(this.contentX() + (this.width.value() / 2), this.contentY() + (this.width.value() / 2), radius, this.filled.value(), this.startAngle.value() * (Math.PI / 180), this.endAngle.value() * (Math.PI / 180), this.style);
        p.stroke();
        this.postDraw(p);
        return true;
    }
}

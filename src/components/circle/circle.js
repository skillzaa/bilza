import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, AniBoolean, AniColor, } from "../../animations/animations.js";
export default class Circle extends CompEngine {
    constructor(circleDb, pack) {
        super(circleDb, pack);
        this.filled = new AniBoolean(circleDb.filled);
        this.startAngle = new AniNumber(circleDb.startAngle);
        this.endAngle = new AniNumber(circleDb.endAngle);
        this.lineWidth = new AniNumber(circleDb.lineWidth);
        this.strokeWidth = new AniNumber(circleDb.strokeWidth);
        this.strokeColor = new AniColor(circleDb.strokeColor);
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
        this.style.strokeStyle = this.strokeColor.value();
        this.style.lineWidth = 1;
        p.beginPath();
        const radius = (this.width.value() / 2);
        p.drawCircle(this.contentX() + (this.width.value() / 2), this.contentY() + (this.width.value() / 2), radius, this.filled.value(), this.startAngle.value() * (Math.PI / 180), this.endAngle.value() * (Math.PI / 180), this.style);
        p.stroke();
        this.postDraw(p);
        return true;
    }
}

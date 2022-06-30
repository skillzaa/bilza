import { BaseComponent, DrawLayer, AniNumber } from "../bilza.js";
export default class Line extends BaseComponent {
    constructor(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        super();
        this.x.set(x1);
        this.y.set(y1);
        this.x2 = new AniNumber(x2);
        this.y2 = new AniNumber(y2);
        this.lineWidth = new AniNumber(2);
        this.color = color;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.x2.update(msDelta);
        this.y2.update(msDelta);
        this.lineWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth.value();
        p.drawLine(p.xPerc(this.x.value()), p.yPerc(this.y.value()), p.xPerc(this.x2.value()), p.yPerc(this.y2.value()), this.style);
        return true;
    }
}

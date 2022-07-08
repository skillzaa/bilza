import { BaseComponent, DrawLayer, AniNumber } from "../bilza.js";
import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";
export default class Line extends BaseComponent {
    constructor(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        super();
        this.x.setInitValue(x1);
        this.y.setInitValue(y1);
        this.x2 = new AniNoXPerc(x2);
        this.y2 = new AniNoYPerc(y2);
        this.lineWidth = new AniNumber(2);
        this.color.set(color);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    init(p) {
        super.init(p);
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.x2.init(this.usePercentages, this.canvasWidth);
        this.y2.init(this.usePercentages, this.canvasHeight);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.x2.update(msDelta);
        this.y2.update(msDelta);
        this.lineWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        p.drawLine(this.x.value(), this.y.value(), this.x2.value(), this.y2.value(), this.style);
        return true;
    }
}

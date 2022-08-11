import { BaseComponent, DrawLayer, AniNumber } from "../bilza.js";
import AniNoPerc from "../animationsXX/aniNoPerc/AniNoPerc.js";
export default class Line extends BaseComponent {
    constructor(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        super();
        this.x.set(x1);
        this.y.set(y1);
        this.x2 = new AniNoPerc(x2);
        this.y2 = new AniNoPerc(y2);
        this.lineWidth = new AniNumber(2);
        this.color.set(color);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    init(p) {
        super.init(p);
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.x2.init(this.responsiveCoordinates, this.canvasWidth);
        this.y2.init(this.responsiveCoordinates, this.canvasHeight);
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
        this.preDraw(p);
        p.drawLine(this.x.value(), this.y.value(), this.x2.value(), this.y2.value(), this.style);
        this.postDraw(p);
        return true;
    }
}

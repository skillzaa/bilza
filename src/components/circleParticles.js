import { BaseComponent, DrawLayer } from "../bilza.js";
import SkipXFrames from "../BaseComponent/pure/skipXFrames.js";
import XY from "../BaseComponent/designBC/xy.js";
export default class CircleParticles extends BaseComponent {
    constructor(count = 10, color = "#008000", framesToSkip = 50) {
        super();
        this.skipXFrames = new SkipXFrames(framesToSkip);
        this.xyArray = [];
        this.drawLayer = DrawLayer.MiddleGround;
        this.count = count;
        this.color.set(color);
        this.size = 10;
    }
    init(p) {
        super.init(p);
        this.getRandomXY();
        return true;
    }
    draw(p) {
        if (this.skipXFrames.skipped() == true) {
            this.getRandomXY();
        }
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.style.fillStyle = this.color.value();
        this.style.opacity = (this.opacity.value());
        this.style.strokeStyle = this.color.value();
        for (let i = 0; i < this.count; i++) {
            p.drawCircle(this.xyArray[i].x, this.xyArray[i].y, this.size, true, 0, (2 * Math.PI), this.style);
        }
        return true;
    }
    getRandomXY() {
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.xyArray.length = 0;
        for (let i = 0; i < this.count; i++) {
            const xy = new XY((Math.random() * this.widthInPix()) + this.x.value(), (Math.random() * this.heightInPix()) + this.y.value());
            this.xyArray.push(xy);
        }
    }
}

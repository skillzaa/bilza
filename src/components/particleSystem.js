import { BaseComponent, DrawLayer } from "../bilza.js";
import { AniNumber, } from "../animationModule/animations.js";
import SkipXFrames from "../BaseComponent/pure/skipXFrames.js";
import XY from "../BaseComponent/designBC/xy.js";
import Circle from "./circle.js";
export default class ParticleSystem extends BaseComponent {
    constructor(quantity = 8, color = "#008000", framesToSkip = 50) {
        super();
        this.circle = new Circle(this.color.value());
        this.particleSize = new AniNumber(12);
        this.circle.width.set(this.particleSize.value());
        this.skipXFrames = new SkipXFrames(framesToSkip);
        this.xyArray = [];
        this.drawLayer = DrawLayer.MiddleGround;
        this.quantity = new AniNumber(quantity);
        this.color.set(color);
        this.circle.color.set(color);
    }
    init(p) {
        super.init(p);
        this.circle.init(p);
        this.getRandomXY();
        return true;
    }
    update(msDelta, p) {
        this.quantity.update(msDelta);
        this.particleSize.update(msDelta);
        this.circle.width.set(this.particleSize.value());
        this.circle.color.set(this.color.value());
        this.circle.update(msDelta, p);
        super.update(msDelta, p);
        return true;
    }
    draw(p) {
        if (this.skipXFrames.skipped() == true) {
            this.getRandomXY();
        }
        this.preDraw(p);
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        for (let i = 0; i < this.quantity.value(); i++) {
            this.circle.x.set(this.xyArray[i].x);
            this.circle.y.set(this.xyArray[i].y);
            this.circle.draw(p);
        }
        this.postDraw(p);
        return true;
    }
    getRandomXY() {
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.xyArray.length = 0;
        for (let i = 0; i < this.quantity.value(); i++) {
            const maxX = this.contentX() + (this.width.value() - this.circle.width.value());
            const maxY = this.contentY() + (this.height.value() - this.circle.height.value());
            const minX = this.contentX();
            const minY = this.contentY();
            const xy = new XY((Math.floor(Math.random() * (maxX - minX + 1) + minX)), (Math.floor(Math.random() * (maxY - minY + 1) + minY)));
            this.xyArray.push(xy);
        }
    }
}

import { BaseComponent, DrawLayer } from "../bilza.js";
import { AniNumber, } from "../animationModule/animations.js";
import SkipXFrames from "../BaseComponent/pure/skipXFrames.js";
import XY from "../BaseComponent/designBC/xy.js";
import Circle from "./circle.js";
export default class ParticleSystem extends BaseComponent {
    constructor(count = 8, color = "#008000", framesToSkip = 50) {
        super();
        this.circle = new Circle(this.color.value());
        this.particleSize = new AniNumber(12);
        this.circle.width.set(this.particleSize.value());
        this.skipXFrames = new SkipXFrames(framesToSkip);
        this.xyArray = [];
        this.drawLayer = DrawLayer.MiddleGround;
        this.count = new AniNumber(count);
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
        this.count.update(msDelta);
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
        for (let i = 0; i < this.count.value(); i++) {
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
        for (let i = 0; i < this.count.value(); i++) {
            const maxX = this.contentX() + (this.contentWidth() - this.circle.contentWidth());
            const maxY = this.contentY() + (this.contentHeight() - this.circle.contentHeight());
            const minX = this.contentX();
            const minY = this.contentY();
            const xy = new XY((Math.floor(Math.random() * (maxX - minX + 1) + minX)), (Math.floor(Math.random() * (maxY - minY + 1) + minY)));
            this.xyArray.push(xy);
        }
    }
}

import Component from "../component/component.js";
import SkipXFrames from "../component/skipXFrames.js";
import XY from "../component/xy.js";
import { AniNumber, AniBoolean, AniColor, } from "../animations/animations.js";
export default class ParticleSystem extends Component {
    constructor(startTime, endTime, canvasWidth, canvasHeight, count = 20, color = "#008000", delay = 50) {
        super(startTime, endTime, canvasWidth, canvasHeight);
        this.particleSize = new AniNumber(12);
        this.skipXFrames = new SkipXFrames(delay);
        this.xyArray = [];
        this.lineWidth = new AniNumber(1);
        this.filled = new AniBoolean(true);
        this.drawLayer = 2;
        this.count = new AniNumber(count);
        this.color.set(color);
        this.lineColor = new AniColor(color);
    }
    init(p) {
        this.getRandomXY();
        return true;
    }
    update(msDelta, p) {
        this.count.update(msDelta);
        this.particleSize.update(msDelta);
        this.lineWidth.update(msDelta);
        this.filled.update(msDelta);
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
        this.drawContentAreaBorder(p);
        this.style.lineWidth = this.lineWidth.value();
        this.style.strokeStyle = this.lineColor.value();
        this.style.fillStyle = this.color.value();
        for (let i = 0; i < this.count.value(); i++) {
            p.drawCircle(this.xyArray[i].x, this.xyArray[i].y, this.particleSize.value(), this.filled.value(), 0, 360, this.style);
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
            const maxX = this.contentX() + (this.contentWidth());
            const maxY = this.contentY() + (this.contentHeight());
            const minX = this.contentX();
            const minY = this.contentY();
            const xy = new XY((Math.floor(Math.random() * (maxX - minX + 1) + minX)), (Math.floor(Math.random() * (maxY - minY + 1) + minY)));
            this.xyArray.push(xy);
        }
    }
}

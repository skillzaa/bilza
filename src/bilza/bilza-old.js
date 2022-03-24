import { CompFactory, DrawLayer, Pack } from "../index.js";
import Background from "./background.js";
export default class Bilza {
    constructor(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        this.canvasId = canvasId;
        this.comps = [];
        this.background = new Background();
        this.timeStart = null;
        this.timeEnd = timeEnd;
        this.interval = null;
        this.msPerFrame = 1000;
        this.pack = new Pack(canvasWidth, canvasHeight, this.canvasId);
        this.add = new CompFactory(this.comps);
    }
    setCanvas(width = 800, height = 400) {
        this.pack = new Pack(width, height, this.canvasId);
    }
    getTimeEnd() {
        return this.timeEnd;
    }
    setTimeEnd(n) {
        this.timeEnd = n;
        return this.timeEnd;
    }
    getCanvasHeight() {
        return this.pack.canvasHeight;
    }
    getCanvasWidth() {
        return this.pack.canvasWidth;
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        let msDelta = this.getMsDelta();
        if (msDelta >= this.timeEnd) {
            this.stop();
        }
        this.pack.clearCanvas();
        this.pack.drawBackground(this.background.color);
        this.drawByDrawLayer(msDelta, DrawLayer.BackGround);
        this.drawByDrawLayer(msDelta, DrawLayer.ForeGround);
        this.drawByDrawLayer(msDelta, DrawLayer.MiddleGround);
        return true;
    }
    drawByDrawLayer(msDelta, drawLayer) {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            if (comp.drawLayer == drawLayer) {
                if (comp.getStart() < msDelta && comp.getEnd() > msDelta) {
                    this.pack.save();
                    comp.update(msDelta, this.pack);
                    comp.draw(this.pack);
                    this.pack.restore();
                }
            }
        }
        return true;
    }
    chqCollision(x, y) {
        return null;
    }
    insert(comp) {
        this.comps.push(comp);
        return comp;
    }
    getMsDelta() {
        if (this.timeStart == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.timeStart;
        }
    }
    start() {
        if (this.timeStart !== null) {
            return false;
        }
        else {
            this.stop();
            this.timeStart = new Date().getTime();
            this.interval = setInterval(() => {
                this.draw();
            }, this.msPerFrame);
            return true;
        }
    }
    stop() {
        this.timeStart = null;
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
    }
    mergeClip(clip) {
        for (let i = 0; i < clip.length; i++) {
            this.comps.push(clip[i]);
        }
        return true;
    }
}

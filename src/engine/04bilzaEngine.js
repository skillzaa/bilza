import { CompFactory, DrawLayer } from "../Bilza.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";
export default class Bilza extends BilzaCanvasSetup {
    constructor(canvasId = "bilza", timeEnd = 60, canvasWidth = 800, canvasHeight = 350) {
        super(canvasId, canvasWidth, canvasHeight, timeEnd);
        this.background = new Background();
        this.add = new CompFactory(this.comps);
    }
    start() {
        if (this.timeStart !== null) {
            return false;
        }
        else {
            this.stop();
            this.timeStart = new Date().getTime();
            this.interval = window.setInterval(() => {
                this.draw();
            }, this.msPerFrame);
            return true;
        }
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
        this.drawByDrawLayer(msDelta, DrawLayer.BackGround, this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.ForeGround, this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.MiddleGround, this.pack);
        return true;
    }
    chqCollision(x, y) {
        return null;
    }
    mergeClip(clip) {
        for (let i = 0; i < clip.length; i++) {
            this.comps.push(clip[i]);
        }
        return true;
    }
    dynamicCanvas(widthInPercent = 100, heightInPercent = 100) {
        let wd = window.innerWidth / 100 * widthInPercent;
        let ht = window.innerHeight / 100 * heightInPercent;
        if (wd < 100 || ht < 100) {
            return false;
        }
        else {
            this.setCanvas(wd, ht);
            return true;
        }
    }
}

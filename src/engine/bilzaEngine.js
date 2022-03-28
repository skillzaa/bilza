import { CompFactory, DrawLayer } from "../Bilza.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./bilzaCanvasSetup.js";
export default class Bilza extends BilzaCanvasSetup {
    constructor(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        super(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER);
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
}

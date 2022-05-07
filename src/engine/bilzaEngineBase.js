import { Pack } from "../Bilza.js";
import Fn from "../functions/fn.js";
export default class BilzaEngineBase {
    constructor(canvasId, canvasWidth, canvasHeight = null) {
        this.util = new Fn();
        this.comps = [];
        this.canvasId = canvasId;
        if (canvasHeight == null) {
            canvasHeight = this.util.aspectRatioHeight(canvasWidth);
        }
        this.pack = new Pack(this.canvasId, canvasWidth, canvasHeight);
    }
    setCanvas(width = 800, height = null) {
        if (height == null) {
            height = this.util.aspectRatioHeight(width);
        }
        this.pack = new Pack(this.canvasId, width, height);
        this.resize(width, height);
    }
    getCanvasHeight() {
        return this.pack.canvasHeight();
    }
    getCanvasWidth() {
        return this.pack.canvasWidth();
    }
    drawByDrawLayer(msDelta, drawLayer, pack) {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            if (comp.drawLayer == drawLayer) {
                if (comp.getStartTime() <= msDelta && comp.getEndTime() > msDelta) {
                    pack.save();
                    comp.update(msDelta, pack);
                    comp.draw(pack);
                    pack.restore();
                }
            }
        }
        return true;
    }
    chqCollision(x, y) {
        return null;
    }
    resize(width = 800, height = 400) {
        for (let i = 0; i < this.comps.length; i++) {
            const element = this.comps[i];
            element.resize(width, height);
        }
    }
}

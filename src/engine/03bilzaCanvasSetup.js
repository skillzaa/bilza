import { Pack } from "../Bilza.js";
import BilzaTimer from "./02bilzaTimer.js";
export default class BilzaCanvasSetup extends BilzaTimer {
    constructor(canvasId, canvasWidth, canvasHeight = null, timeEnd) {
        super(timeEnd);
        this.canvasId = canvasId;
        if (canvasHeight == null) {
            canvasHeight = this.util.aspectRatioHeight(canvasWidth);
        }
        this.pack = new Pack(this.canvasId, canvasWidth, canvasHeight);
    }
    insert(comp) {
        this.comps.push(comp);
        return comp;
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
}

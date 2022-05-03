import { Pack } from "../Bilza.js";
import BilzaTimer from "./02bilzaTimer.js";
export default class BilzaCanvasSetup extends BilzaTimer {
    constructor(canvasId, canvasWidth, canvasHeight = null, timeEndSec) {
        super(timeEndSec);
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
}

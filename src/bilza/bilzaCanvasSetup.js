import { Pack } from "../index.js";
import BilzaTimer from "./bilzaTimer.js";
export default class BilzaCanvasSetup extends BilzaTimer {
    constructor(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        super(timeEnd);
        this.canvasId = canvasId;
        this.pack = new Pack(canvasWidth, canvasHeight, this.canvasId);
    }
    setCanvas(width = 800, height = 400) {
        this.pack = new Pack(width, height, this.canvasId);
    }
    getCanvasHeight() {
        return this.pack.canvasHeight;
    }
    getCanvasWidth() {
        return this.pack.canvasWidth;
    }
}

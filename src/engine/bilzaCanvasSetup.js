import { Pack } from "../Bilza.js";
import BilzaTimer from "./bilzaTimer.js";
export default class BilzaCanvasSetup extends BilzaTimer {
    constructor(canvasId = "bilza", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        super(timeEnd);
        this.canvasId = canvasId;
        this.pack = new Pack(this.canvasId, canvasWidth, canvasHeight);
    }
    setCanvas(width = 800, height = 400) {
        this.pack = new Pack(this.canvasId, width, height);
    }
    getCanvasHeight() {
        return this.pack.canvasHeight;
    }
    getCanvasWidth() {
        return this.pack.canvasWidth;
    }
}

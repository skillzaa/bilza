import { Pack } from "../Bilza.js";
import BilzaTimer from "./02bilzaTimer.js";
export default class BilzaCanvasSetup extends BilzaTimer {
    constructor(canvasId, canvasWidth, canvasHeight, timeEnd) {
        super(timeEnd);
        this.canvasId = canvasId;
        this.pack = new Pack(this.canvasId, canvasWidth, canvasHeight);
    }
    setCanvas(width = 800, height = 400) {
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

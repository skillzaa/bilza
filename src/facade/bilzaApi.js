import EngineDb from "../db/engineDb.js";
import CompFactory from "./compFactory.js";
import BackgroundDb from "../db/backgroundDb.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.engineDb = new EngineDb(canvasId, canvasWidthPerc);
        this.background = new BackgroundDb("green");
        this.comps = [];
    }
    add(secStart, secEnd) {
        const cf = new CompFactory(secStart, secEnd, this.comps, "add", this.engineDb.canvasWidth, this.engineDb.canvasHeight);
        return cf;
    }
    alwaysOn() {
        const cf = new CompFactory(0, 1, this.comps, "alwaysOn", this.engineDb.canvasWidth, this.engineDb.canvasHeight);
        return cf;
    }
    append(duration) {
        const cf = new CompFactory(0, duration, this.comps, "append", this.engineDb.canvasWidth, this.engineDb.canvasHeight);
        return cf;
    }
    start() {
    }
    stop() {
    }
    draw(timeSec = 0) {
    }
    animationDuration() {
    }
    isRunning() {
    }
    resizeCanvas() {
    }
    addScene(scene) {
    }
}

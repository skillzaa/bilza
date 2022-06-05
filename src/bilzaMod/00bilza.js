import { DrawLayer, Pack } from "../Bilza.js";
import Background from "./background.js";
import StopWatch from "./stopWatch.js";
import Settings from "./settings.js";
import Comps from "./comps.js";
import Insert from "./insert.js";
import Duration from "./duration.js";
export default class Bilza {
    constructor(canvasId = "bilza", screenWidthInPercent = 80) {
        this.pack = new Pack(canvasId, screenWidthInPercent);
        this.comps = new Comps();
        this.duration = new Duration();
        this.insert = new Insert(this.comps, this.duration, this.pack.charsWidth.bind(this.pack));
        this.stopWatch = new StopWatch();
        this.set = new Settings();
        this.background = new Background();
    }
    init() {
        this.comps.init(this.pack);
        return true;
    }
    drawInit() {
        this.comps.init(this.pack);
        this.draw();
        return true;
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        let msDelta = this.stopWatch.getMsDelta();
        if (msDelta >= this.len(true)) {
            this.stopWatch.stop();
        }
        this.pack.clearCanvas();
        this.pack.drawBackground(this.background.color);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.BackGround, this.pack);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.MiddleGround, this.pack);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.ForeGround, this.pack);
        this.drawEvent(msDelta);
        return true;
    }
    len(inMilliSeconds = true) {
        return this.duration.len(inMilliSeconds);
    }
    drawEvent(msDelta) {
        return true;
    }
    dynamicCanvas(widthInPercent = 95, heightInPercent = null) {
        this.pack.dynamicCanvas(widthInPercent, heightInPercent);
        return true;
    }
    start() {
        this.stopWatch.start(this.draw.bind(this));
        return true;
    }
    stop() {
        this.stopWatch.stop();
        return true;
    }
    resizeCanvas(width, height) {
        this.pack.resizeCanvas(width, height);
    }
}

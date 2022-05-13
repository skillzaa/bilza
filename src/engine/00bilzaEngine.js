import { DrawLayer, Pack } from "../Bilza.js";
import Background from "../components/background/background.js";
import StopWatch from "./stopWatch.js";
import Settings from "./settings.js";
import Comps from "./comps.js";
import Duration from "./duration.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidth = 800, canvasHeight = null) {
        this.pack = new Pack(canvasId, canvasWidth, canvasHeight);
        this.comps = new Comps();
        this.duration = new Duration();
        this.stopWatch = new StopWatch();
        this.set = new Settings();
        this.background = new Background();
    }
    drawInit() {
        this.comps.initAll(this.pack);
        this.draw();
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        let msDelta = this.stopWatch.getMsDelta();
        if (msDelta >= this.duration.len(true)) {
            this.stopWatch.stop();
        }
        this.pack.clearCanvas();
        this.background.draw(this.pack);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.BackGround, this.pack);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.MiddleGround, this.pack);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.ForeGround, this.pack);
        this.drawEvent(msDelta);
        return true;
    }
    drawEvent(msDelta) {
        return true;
    }
    dynamicCanvas(widthInPercent = 95, heightInPercent = null) {
        this.pack.dynamicCanvas(widthInPercent, heightInPercent);
        return true;
    }
    insert(comp) {
        this.duration.adjectWhileInsert(comp);
        return this.comps.push(comp);
    }
    start() {
        this.stopWatch.start(this.draw.bind(this));
    }
}

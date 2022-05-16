import { Pack } from "../Bilza.js";
import Background from "./background.js";
import StopWatch from "./stopWatch.js";
import Settings from "./settings.js";
import Comps from "./comps.js";
import Insert from "./insert.js";
export default class Bilza {
    constructor(canvasId = "bilza", screenWidthInPercent = 80) {
        this.pack = new Pack(canvasId, screenWidthInPercent);
        this.comps = new Comps();
        this.insert = new Insert(this.comps);
        this.stopWatch = new StopWatch();
        this.set = new Settings();
        this.background = new Background();
    }
    drawInit() {
        this.comps.initAll(this.pack);
        this.draw();
        return true;
    }
    draw() {
        return true;
    }
    len(inMilliSeconds = true) {
        return this.insert.len(inMilliSeconds);
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
}

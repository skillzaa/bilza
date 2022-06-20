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
        this.lastMsDelta = 0;
        this.soundTrackElement = null;
        this.soundTrack = null;
        this.insert = new Insert(this.comps, this.duration, this.pack.charsWidth.bind(this.pack));
        this.stopWatch = new StopWatch();
        this.set = new Settings();
        this.background = new Background();
    }
    init() {
        if (this.soundTrack !== null) {
            this.soundTrackElement = new Audio(this.soundTrack);
        }
        this.comps.init(this.pack);
        return true;
    }
    drawInit() {
        this.comps.init(this.pack);
        this.draw();
        return true;
    }
    draw() {
        let msDelta = this.stopWatch.getMsDelta();
        this.lastMsDelta = msDelta;
        this.drawFrame(msDelta);
        this.drawEvent(msDelta);
        return true;
    }
    drawFrame(msDelta = 0) {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        if (msDelta >= this.len(true)) {
            this.stopWatch.stop();
        }
        this.pack.clearCanvas();
        this.pack.drawBackground(this.background.color);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.BackGround, this.pack);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.MiddleGround, this.pack);
        this.comps.drawByDrawLayer(msDelta, DrawLayer.ForeGround, this.pack);
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
        this.init();
        if (this.soundTrackElement !== null) {
            this.soundTrackElement.play();
        }
        this.stopWatch.start(this.draw.bind(this));
        return true;
    }
    stop() {
        if (this.soundTrackElement !== null) {
            this.soundTrackElement.pause();
            this.soundTrackElement.currentTime = 0;
        }
        this.stopWatch.stop();
        return true;
    }
    resizeCanvas(width, height) {
        this.pack.resizeCanvas(width, height);
    }
    lastMeDelta() {
        return this.lastMsDelta;
    }
    isRunning() {
        return this.stopWatch.isRunning();
    }
}

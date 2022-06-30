import { DrawLayer, Pack } from "../bilza.js";
import Background from "./background.js";
import StopWatch from "./stopWatch.js";
import Settings from "./settings.js";
import Comps from "./comps.js";
import Insert from "./insert.js";
import Duration from "./duration.js";
export default class Bilza {
    constructor(canvasId = "bilza", screenWidthInPercent = 75) {
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
    drawForStart() {
        let msDelta = this.stopWatch.getMsDelta();
        window.requestAnimationFrame(this.drawForStart.bind(this));
        this.lastMsDelta = msDelta;
        this.draw(msDelta);
        return true;
    }
    draw(msDelta = 0) {
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
        this.drawEvent(msDelta);
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
        if (this.stopWatch.isRunning() == true) {
            return false;
        }
        this.stop();
        this.stopWatch.runningStartTimeTS = new Date().getTime();
        window.requestAnimationFrame(this.drawForStart.bind(this));
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
    getLastMsDelta() {
        return this.lastMsDelta;
    }
    isRunning() {
        return this.stopWatch.isRunning();
    }
}

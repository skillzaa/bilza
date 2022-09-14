import { DrawLayer, Pack } from "../bilza.js";
import Background from "../components/background.js";
import StopWatch from "./stopWatch.js";
import Settings from "./settings.js";
import Comps from "./comps.js";
import CompFactory from "./insert/compFactory.js";
import Duration from "./insert/duration.js";
import Insert from "./insert/insert.js";
export default class Bilza {
    constructor(canvasId = "bilza", screenWidthInPercent = 70) {
        this.pack = new Pack(canvasId, screenWidthInPercent);
        this.comps = new Comps();
        this.duration = new Duration();
        this.lastMsDelta = 0;
        this.soundTrackElement = document.getElementById("soundTrackElement");
        this.soundTrack = null;
        this.stopWatch = new StopWatch();
        this.set = new Settings(this.pack);
        this.background = new Background();
        this._insert = new Insert(this.comps, this.duration, this.pack.charsWidth.bind(this.pack));
    }
    init() {
        if (this.set.loadSystemBackground == true) {
            this._insert.alwaysOn(this.background);
        }
        this.comps.init(this.pack);
        return true;
    }
    drawForStart() {
        let msDelta = this.stopWatch.getMsDelta();
        if (this.stopWatch.shouldStop() == true) {
            this.stop();
            return false;
        }
        else {
            window.requestAnimationFrame(this.drawForStart.bind(this));
        }
        this.lastMsDelta = msDelta;
        this.draw_internal(msDelta);
        return true;
    }
    draw(msDelta = 0) {
        this.init();
        this.draw_internal(msDelta);
    }
    draw_internal(msDelta = 0) {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        if (msDelta >= this.len(true)) {
            this.stopWatch.stop();
        }
        if (this.set.clearCanvasBwFrames == true) {
            this.pack.clearCanvas();
        }
        this.comps.drawByDrawLayer(msDelta, DrawLayer.SystemBackGround, this.pack);
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
        if (this.stopWatch.isRunning() == true) {
            return false;
        }
        this.stop();
        if (this.soundTrackElement !== null) {
            this.soundTrackElement.play();
        }
        this.init();
        this.stopWatch.start();
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
    add(startTime, endTime) {
        const cf = new CompFactory(startTime, endTime, "add", this.insert.bind(this));
        return cf;
    }
    alwaysOn() {
        const cf = new CompFactory(0, 1, "alwaysOn", this.insert.bind(this));
        return cf;
    }
    append(duration) {
        const cf = new CompFactory(0, duration, "append", this.insert.bind(this));
        return cf;
    }
    insert(comp, actionType) {
        switch (actionType) {
            case "add":
                this._insert.add(comp, comp.getStartTime(false), comp.getEndTime(false));
                break;
            case "append":
                this._insert.append(comp, comp.getStartTime(false));
                break;
            case "alwaysOn":
                this._insert.alwaysOn(comp);
                break;
        }
        return comp;
    }
}

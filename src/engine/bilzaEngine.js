import { DrawLayer, Pack } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "../components/background/background.js";
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
import Fn from "../functions/fn.js";
import getCanvasElement from "./getCanvasElement.js";
import adjectDurationWhileInsert from "./adjectDurationWhileInsert.js";
import drawByDrawLayer from "./drawByDrawLayer.js";
import initAll from "./initAll.js";
import resizeAll from "./resizeAll.js";
import StopWatch from "./stopWatch.js";
import dynamicCanvasHtWd from "./dynamicCanvasHtWd.js";
import Settings from "./settings.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidth = 800, canvasHeight = null) {
        this.comps = [];
        this.stopWatch = new StopWatch();
        this.set = new Settings();
        this.util = new Fn();
        this.canvas = getCanvasElement(canvasId);
        this.pack = new Pack(this.canvas, canvasWidth, canvasHeight);
        this.background = new Background();
        this.runningStartTimeTS = null;
        this._pvt_duration_val = 0;
        this.interval = null;
        this.msPerFrame = 100;
        this.add = new CompFactory();
        this.textTempl = new TextTemplWrapper(this.insert.bind(this));
        this.gridTempl = new GridTemplates(this.insert.bind(this));
    }
    drawInit() {
        initAll(this.comps, this.pack);
        this.draw();
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        let msDelta = this.getMsDelta();
        if (msDelta >= this.duration(true)) {
            this.stopWatch.stop();
        }
        this.pack.clearCanvas();
        this.background.draw(this.pack);
        drawByDrawLayer(this.comps, msDelta, DrawLayer.BackGround, this.pack);
        drawByDrawLayer(this.comps, msDelta, DrawLayer.MiddleGround, this.pack);
        drawByDrawLayer(this.comps, msDelta, DrawLayer.ForeGround, this.pack);
        this.drawEvent(msDelta);
        return true;
    }
    drawEvent(msDelta) {
        return true;
    }
    dynamicCanvas(widthInPercent = 95, heightInPercent = null) {
        let htwd = dynamicCanvasHtWd(widthInPercent, heightInPercent);
        this.setCanvas(htwd.width, htwd.height);
        return true;
    }
    duration(inMilliSeconds = true) {
        if (inMilliSeconds) {
            return (this._pvt_duration_val * 1000);
        }
        else {
            return (this._pvt_duration_val);
        }
    }
    extendDuration(n) {
        this._pvt_duration_val += n;
        return this._pvt_duration_val;
    }
    getMsDelta() {
        if (this.runningStartTimeTS == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.runningStartTimeTS;
        }
    }
    setMsDelta(n) {
        if (this.runningStartTimeTS == null) {
            return 0;
        }
        if (n > this.duration() || n < 0) {
            return 0;
        }
        this.runningStartTimeTS = new Date().getTime() - n;
        return this.runningStartTimeTS;
    }
    setCanvas(width = 800, height = null) {
        if (height == null) {
            height = this.util.aspectRatioHeight(width);
        }
        this.pack = new Pack(this.canvas, width, height);
        resizeAll(this.comps, this.pack.canvasWidth(), this.pack.canvasHeight());
    }
    getCanvasHeight() {
        return this.pack.canvasHeight();
    }
    getCanvasWidth() {
        return this.pack.canvasWidth();
    }
    chqCollision(x, y) {
        return null;
    }
    insert(comp) {
        adjectDurationWhileInsert(comp, this.duration(false), this.extendDuration.bind(this));
        this.comps.push(comp);
        return comp;
    }
}

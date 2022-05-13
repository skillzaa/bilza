import { DrawLayer, Pack } from "../Bilza.js";
import Background from "../components/background/background.js";
import Fn from "../functions/fn.js";
import getCanvasElement from "./getCanvasElement.js";
import adjectDurationWhileInsert from "./adjectDurationWhileInsert.js";
import StopWatch from "./stopWatch.js";
import dynamicCanvasHtWd from "./dynamicCanvasHtWd.js";
import Settings from "./settings.js";
import Comps from "./comps.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidth = 800, canvasHeight = null) {
        this.comps = new Comps();
        this.stopWatch = new StopWatch();
        this.set = new Settings();
        this.util = new Fn();
        this.canvas = getCanvasElement(canvasId);
        this.pack = new Pack(this.canvas, canvasWidth, canvasHeight);
        this.background = new Background();
        this._pvt_duration_val = 0;
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
        if (msDelta >= this.duration(true)) {
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
    setCanvas(width = 800, height = null) {
        if (height == null) {
            height = this.util.aspectRatioHeight(width);
        }
        this.pack = new Pack(this.canvas, width, height);
        this.comps.resizeAll(this.pack.canvasWidth(), this.pack.canvasHeight());
    }
    getCanvasHeight() {
        return this.pack.canvasHeight();
    }
    getCanvasWidth() {
        return this.pack.canvasWidth();
    }
    insert(comp) {
        adjectDurationWhileInsert(comp, this.duration(false), this.extendDuration.bind(this));
        return this.comps.push(comp);
    }
    start() {
        this.stopWatch.start(this.draw.bind(this));
    }
}

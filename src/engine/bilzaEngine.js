import { DrawLayer, Pack } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "../components/background/background.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
import Comps from "./comps.js";
import Fn from "../functions/fn.js";
import getCanvasElement from "./getCanvasElement.js";
import adjectDurationWhileInsert from "./adjectDurationWhileInsert.js";
import Settings from "./settings.js";
export default class Bilza {
    constructor(canvasId = "bilza", canvasWidth = 800, canvasHeight = null) {
        this.set = new Settings();
        this.util = new Fn();
        this.canvas = getCanvasElement(canvasId);
        this.pack = new Pack(this.canvas, canvasWidth, canvasHeight);
        this.background = new Background();
        this.runningStartTimeTS = null;
        this._pvt_duration_val = 0;
        this.interval = null;
        this.msPerFrame = 100;
        this.comps = new Comps(this.pack);
        this.init = this.comps.init.bind(this.comps);
        this.drawByDrawLayer = this.comps.drawByDrawLayer.bind(this.comps);
        this.resizeAll = this.comps.resizeAll.bind(this.comps);
        this.add = new CompFactory();
        this.textTempl = new TextTemplWrapper(this.insert.bind(this));
        this.gridTempl = new GridTemplates(this.insert.bind(this));
    }
    start() {
        if (this.runningStartTimeTS !== null) {
            return false;
        }
        else {
            this.stop();
            this.init();
            this.runningStartTimeTS = new Date().getTime();
            this.interval = window.setInterval(() => {
                this.draw();
            }, this.msPerFrame);
            return true;
        }
    }
    drawInit() {
        this.init();
        this.draw();
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        let msDelta = this.getMsDelta();
        if (msDelta >= this.duration(true)) {
            this.stop();
        }
        this.pack.clearCanvas();
        this.background.draw(this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.BackGround, this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.MiddleGround, this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.ForeGround, this.pack);
        this.drawEvent(msDelta);
        return true;
    }
    drawEvent(msDelta) {
        return true;
    }
    dynamicCanvas(widthInPercent = 95, heightInPercent = null) {
        let wd = window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
        let ht = null;
        if (heightInPercent !== null) {
            let ht = window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
        }
        this.setCanvas(wd, ht);
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
    stop() {
        this.runningStartTimeTS = null;
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
        return true;
    }
    setCanvas(width = 800, height = null) {
        if (height == null) {
            height = this.util.aspectRatioHeight(width);
        }
        this.pack = new Pack(this.canvas, width, height);
        this.resizeAll(this.pack.canvasWidth(), this.pack.canvasHeight());
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
        this.comps.compsArray.push(comp);
        return comp;
    }
}

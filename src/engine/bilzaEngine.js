import { DrawLayer, Pack } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "../components/background/background.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
import Comps from "./comps.js";
import Fn from "../functions/fn.js";
import getCanvasElement from "./getCanvasElement.js";
export default class Bilza {
    constructor(canvasId = "bilza", duration = 60, canvasWidth = 800, canvasHeight = null) {
        this.util = new Fn();
        this.canvas = getCanvasElement(canvasId);
        this.pack = new Pack(this.canvas, canvasWidth, canvasHeight);
        this.background = new Background();
        this.timeStart = null;
        this.timeEnd = duration * 1000;
        this.interval = null;
        this.msPerFrame = 100;
        this.comps = new Comps(this.pack);
        this.insert = this.comps.insert.bind(this.comps);
        this.init = this.comps.init.bind(this.comps);
        this.drawByDrawLayer = this.comps.drawByDrawLayer.bind(this.comps);
        this.resizeAll = this.comps.resizeAll.bind(this.comps);
        this.add = new CompFactory(this.insert.bind(this), this.pack);
        this.textTempl = new TextTemplWrapper(this.insert.bind(this));
        this.gridTempl = new GridTemplates(this.insert.bind(this));
    }
    start() {
        if (this.timeStart !== null) {
            return false;
        }
        else {
            this.stop();
            this.init();
            this.timeStart = new Date().getTime();
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
        if (msDelta >= this.timeEnd) {
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
    getTimeEnd() {
        return this.timeEnd;
    }
    setTimeEnd(n) {
        this.timeEnd = n;
        return this.timeEnd;
    }
    getMsDelta() {
        if (this.timeStart == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.timeStart;
        }
    }
    setMsDelta(n) {
        if (this.timeStart == null) {
            return 0;
        }
        if (n > this.getTimeEnd() || n < 0) {
            return 0;
        }
        this.timeStart = new Date().getTime() - n;
        return this.timeStart;
    }
    stop() {
        this.timeStart = null;
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
}

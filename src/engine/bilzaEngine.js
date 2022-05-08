import { DrawLayer, Pack } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "./background.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
import Comps from "./comps/comps.js";
import Fn from "../functions/fn.js";
import getCanvasElement from "./getCanvasElement.js";
export default class Bilza {
    constructor(canvasId = "bilza", timeEndSec = 60, canvasWidth = 800, canvasHeight = 300) {
        this.util = new Fn();
        this.canvasId = canvasId;
        this.canvas = getCanvasElement(canvasId);
        if (canvasHeight == null) {
            canvasHeight = this.util.aspectRatioHeight(canvasWidth);
        }
        this.pack = new Pack(this.canvas, canvasWidth, canvasHeight);
        this.background = new Background();
        this.timeStart = null;
        this.timeEnd = timeEndSec * 1000;
        this.interval = null;
        this.msPerFrame = 1000;
        this.comps = new Comps(this.pack);
        this.insert = this.comps.insert.bind(this.comps);
        this.init = this.comps.init.bind(this.comps);
        this.drawByDrawLayer = this.comps.drawByDrawLayer.bind(this.comps);
        this.resize = this.comps.resize.bind(this.comps);
        this.add = new CompFactory(this.insert.bind(this));
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
        this.pack.drawBackground(this.background.color);
        this.drawByDrawLayer(msDelta, DrawLayer.BackGround, this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.MiddleGround, this.pack);
        this.drawByDrawLayer(msDelta, DrawLayer.ForeGround, this.pack);
        this.drawEvent(msDelta);
        return true;
    }
    drawEvent(msDelta) {
        return true;
    }
    dynamicCanvas(widthInPercent = 100, heightInPercent = 100) {
        let wd = window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
        let ht = window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
        if (wd < 100 || ht < 100) {
            return false;
        }
        else {
            this.setCanvas(wd, ht);
            return true;
        }
    }
    dynamicFontSize(txt, widthPercent = 10, heightPercent = null, setFontSize = true) {
        if (heightPercent == null) {
            heightPercent = widthPercent;
        }
        let reqWd = (this.pack.canvasWidth() / 100 * widthPercent);
        let reqHt = (this.pack.canvasWidth() / 100 * heightPercent);
        txt.style.fontSize = txt.d.fontSize;
        let oldFontSize = txt.d.fontSize;
        let newWidth = 0;
        let newHeight = 0;
        for (let i = 1; i < 900; i++) {
            txt.style.fontSize = i;
            newWidth = txt.width(this.pack);
            newHeight = txt.height(this.pack);
            if (newWidth >= reqWd || newHeight >= reqHt) {
                if (setFontSize == false) {
                    txt.d.fontSize = oldFontSize;
                    txt.style.fontSize = oldFontSize;
                    return i;
                }
                else {
                    txt.d.fontSize = i;
                    txt.style.fontSize = i;
                    return txt.d.fontSize;
                }
            }
        }
        return null;
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
        this.resize(width, height);
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

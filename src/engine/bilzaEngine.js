import { DrawLayer } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
export default class Bilza extends BilzaCanvasSetup {
    constructor(canvasId = "bilza", timeEndSec = 60, canvasWidth = 800, canvasHeight = 300) {
        super(canvasId, canvasWidth, canvasHeight, timeEndSec);
        this.background = new Background();
        this.add = new CompFactory(this.insert.bind(this));
        this.textTempl = new TextTemplWrapper(this.insert.bind(this));
        this.gridTempl = new GridTemplates(this.insert.bind(this));
        this.timeStart = null;
        this.timeEnd = timeEndSec * 1000;
        this.interval = null;
        this.msPerFrame = 1000;
    }
    insert(comp) {
        this.comps.push(comp);
        return comp;
    }
    insertAt(comp, second) {
        let secondMs = second * 1000;
        let startTime = comp.getStartTime();
        let endTime = comp.getEndTime();
        comp.setStartTime(startTime + secondMs);
        comp.setEndTime(endTime + secondMs);
        if (this.getTimeEnd() < comp.getEndTime()) {
            this.setTimeEnd(comp.getEndTime());
        }
        this.comps.push(comp);
        return comp;
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
    init() {
        for (let i = 0; i < this.comps.length; i++) {
            this.comps[i].init(this.pack);
        }
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
}

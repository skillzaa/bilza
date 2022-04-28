import { DrawLayer } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
export default class Bilza extends BilzaCanvasSetup {
    constructor(canvasId = "bilza", canvasWidth = 800, canvasHeight = null, timeEnd = 60) {
        super(canvasId, canvasWidth, canvasHeight, timeEnd);
        this.background = new Background();
        this.add = new CompFactory(this.comps);
    }
    start() {
        if (this.timeStart !== null) {
            return false;
        }
        else {
            this.stop();
            this.timeStart = new Date().getTime();
            this.interval = window.setInterval(() => {
                this.draw();
            }, this.msPerFrame);
            return true;
        }
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
    mergeClip(clip) {
        for (let i = 0; i < clip.length; i++) {
            this.comps.push(clip[i]);
        }
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
}

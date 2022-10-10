import CompDb from "../../compDb/compDb.js";
import LineSeg from "./lineSeg.js";
import checkZeroToHundred from "../../functions/checkZeroToHundred.js";
import { hsl } from "../../bilza.js";
export default class SegDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, x, y, hue_0_360 = 0, lineWidth = 4) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        checkZeroToHundred(x);
        checkZeroToHundred(y);
        this.startX = x;
        this.startY = y;
        this.lineWidth = lineWidth,
            this.color.set(hsl(hue_0_360));
        this.filled = false;
        this.closed = false;
        this.lineDash = [1, 0];
        this.lineCap = "round";
        this.lineJoin = "miter";
        this.data = [];
    }
    setLineCap(lineCap) {
        this.lineCap = lineCap;
    }
    getLineCap() {
        return this.lineCap;
    }
    setLineJoin(lineJoin = "miter") {
        this.lineJoin = lineJoin;
    }
    getLineJoin() {
        return this.lineJoin;
    }
    setLineDash(lineDash = [1, 0]) {
        this.lineDash = lineDash;
    }
    getLineDash() {
        return this.lineDash;
    }
    setFilled(filled = true) {
        this.filled = filled;
        return this.filled;
    }
    getFilled() {
        return this.filled;
    }
    setClosed(closed = true) {
        this.closed = closed;
        return this.closed;
    }
    getClosed() {
        return this.closed;
    }
    lineTo(x, y) {
        checkZeroToHundred(x);
        checkZeroToHundred(y);
        this.data.push({ x: x, y: y, command: "lineTo" });
    }
    moveTo(x, y) {
        checkZeroToHundred(x);
        checkZeroToHundred(y);
        this.data.push({ x: x, y: y, command: "moveTo" });
    }
    fill() {
        this.data.push({ x: 0, y: 0, command: "fill" });
    }
    getEngineComp(pack) {
        const comp = new LineSeg(this, pack);
        return comp;
    }
}

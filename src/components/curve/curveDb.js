import CompDb from "../../compDb/compDb.js";
import checkZeroToHundred from "../../functions/checkZeroToHundred.js";
import { AniNumberDb, AniColorDb } from "../../animationsFacade/animationsDb.js";
import Arc from "./curve.js";
export default class ArcDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, startX, startY, midX, midY, endX, endY, color = "black") {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        checkZeroToHundred(startX);
        checkZeroToHundred(startY);
        checkZeroToHundred(midX);
        checkZeroToHundred(midY);
        checkZeroToHundred(endX);
        checkZeroToHundred(endY);
        this.startX = new AniNumberDb(startX);
        this.startY = new AniNumberDb(startY);
        this.midX = new AniNumberDb(midX);
        this.midY = new AniNumberDb(midY);
        this.endX = new AniNumberDb(endX);
        this.endY = new AniNumberDb(endY);
        this.lineWidth = new AniNumberDb(1);
        this.bracketWidth = new AniNumberDb(2);
        this.colorBracket = new AniColorDb("yellow");
        this.color.set(color);
        this.lineWidth = new AniNumberDb(1);
        this.width.set(30);
        this.height.set(50);
    }
    getEngineComp(pack) {
        const comp = new Arc(this, pack);
        return comp;
    }
    leftMost() {
        const smaller = (this.startX.value() < this.midX.value())
            ? this.startX : this.midX;
        const left = (smaller.value() < this.endX.value())
            ? smaller : this.endX;
        return left;
    }
    rightMost() {
        const larger = (this.startX.value() > this.midX.value())
            ? this.startX : this.midX;
        const large = (larger.value() > this.endX.value())
            ? larger : this.endX;
        return large;
    }
    topMost() {
        const topper = (this.startY.value() < this.midY.value())
            ? this.startY : this.midY;
        const top = (topper.value() < this.endY.value())
            ? topper : this.endY;
        return top;
    }
    bottomMost() {
        const topper = (this.startY.value() > this.midY.value())
            ? this.startY : this.midY;
        const top = (topper.value() > this.endY.value())
            ? topper : this.endY;
        return top;
    }
}

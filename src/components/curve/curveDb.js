import CompDb from "../../compDb/compDb.js";
import checkZeroToHundred from "../../functions/checkZeroToHundred.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animations/animations.js";
import Arc from "./curve.js";
export default class CurveDb extends CompDb {
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
        this.showBracket = new AniBooleanDb(true);
        this.color.set(color);
        this.lineWidth = new AniNumberDb(1);
        this.width.set(30);
        this.height.set(30);
    }
    getEngineComp(pack) {
        const comp = new Arc(this, pack);
        return comp;
    }
}

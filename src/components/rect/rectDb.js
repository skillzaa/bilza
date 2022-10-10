import CompDb from "../../compDb/compDb.js";
import Rect from "./rect.js";
import { AniNumberDb } from "../../animations/animations.js";
export default class RectDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, color) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.lineWidth = new AniNumberDb(1);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new Rect(this, pack);
        return comp;
    }
}

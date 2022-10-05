import CompDb from "../../compDb/compDb.js";
import FillRect from "./fillRect.js";
export default class FillRectDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, color) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new FillRect(this, pack);
        return comp;
    }
}

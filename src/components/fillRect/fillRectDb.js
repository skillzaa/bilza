import CompDb from "../../compDb/compDb.js";
import FillRect from "./fillRect.js";
export default class FillRectDb extends CompDb {
    constructor(startTime, endTime, insertAction) {
        super(startTime, endTime, insertAction);
    }
    getEngineComp(pack) {
        const comp = new FillRect(this, pack, "red");
        return comp;
    }
}

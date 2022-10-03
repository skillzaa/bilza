import ComponentDb from "../../compDb/compDb.js";
import FillRect from "./fillRect.js";
export default class FillRectDb extends ComponentDb {
    constructor(startTime, endTime, insertAction) {
        super(startTime, endTime, insertAction);
    }
    getEngineCom() {
        const comp = new FillRect("red");
        return comp;
    }
}

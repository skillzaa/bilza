import CompDb from "../../compDb/compDb.js";
import FillRect from "./fillRect.js";
export default class FillRectDb extends CompDb {
    constructor(linker, color) {
        super(linker);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new FillRect(this, pack);
        return comp;
    }
}

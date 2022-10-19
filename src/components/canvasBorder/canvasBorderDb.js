import CompDb from "../../compDb/compDb.js";
import CanvasBorder from "./canvasBorder.js";
import { AniNumberDb } from "../../animations/animations.js";
export default class CanvasBorderDb extends CompDb {
    constructor(linker, color = "grey", width = 0.25) {
        super(linker);
        this.borderWidth = new AniNumberDb(width);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new CanvasBorder(this, pack);
        return comp;
    }
}

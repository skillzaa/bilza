import { AniColorDb } from "../../animations/animations.js";
import Background from "./background.js";
import CompDb from "../../compDb/compDb.js";
export default class BackgroundDb extends CompDb {
    constructor(linker, color = "#efeee3") {
        super(linker);
        this.color = new AniColorDb(color);
    }
    getEngineComp(pack) {
        const comp = new Background(this, pack);
        return comp;
    }
}

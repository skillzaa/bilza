import Pack from "../pack/pack.js";
import getEngine from "./getEngine.js";
export default class Compiler {
    constructor() {
    }
    genApp(engineDb, compsDb) {
        const pack = new Pack(engineDb.canvasId, engineDb.canvasWidthPerc);
        const bilza = getEngine(engineDb, pack, []);
        return bilza;
    }
}

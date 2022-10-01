import EnginePack from "./enginePack.js";
import Pack from "../pack/pack.js";
export default class Compiler {
    constructor() {
    }
    getEnginePack() {
        const ep = new EnginePack();
    }
    genApp(engineDb, compsDb) {
        const pack = new Pack(engineDb.canvasId, engineDb.canvasWidthPerc);
        const comps = getComps(compsDb);
        return bilza;
    }
}

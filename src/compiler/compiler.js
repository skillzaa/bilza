import Pack from "../pack/pack.js";
import getEngine from "./getEngine.js";
import getEngineComp from "../compCompiler/getEngineComp.js";
export default class Compiler {
    constructor() {
    }
    genApp(engineDb, compsDb) {
        const pack = new Pack(engineDb.canvasId, engineDb.canvasWidthPerc);
        const comps = [];
        for (let i = 0; i < compsDb.length; i++) {
            const compDb = compsDb[i];
            const engineComp = getEngineComp(compDb, pack);
            comps.push(engineComp);
        }
        const bilza = getEngine(engineDb, pack, comps);
        return bilza;
    }
}

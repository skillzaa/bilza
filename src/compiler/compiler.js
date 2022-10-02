import Pack from "../pack/pack.js";
import getEngine from "./getEngine.js";
import getComponentPack from "../componentPack/getComponentPack.js";
export default class Compiler {
    constructor() {
    }
    genApp(engineDb, compsDb) {
        const pack = new Pack(engineDb.canvasId, engineDb.canvasWidthPerc);
        const comps = [];
        const componentPack = getComponentPack(pack);
        const compDb = compsDb[0];
        const engineComp = compDb.getEngineComponent(componentPack);
        comps.push(engineComp);
        console.log("engineComp", engineComp);
        const bilza = getEngine(engineDb, pack, comps);
        return bilza;
    }
}

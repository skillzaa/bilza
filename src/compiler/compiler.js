import Pack from "../pack/pack.js";
import Insert from "../insert/insert.js";
import Engine from "../engine/engine.js";
export default class Compiler {
    constructor() {
    }
    genApp(engineDb, compsDb) {
        const pack = new Pack(engineDb.canvasId, engineDb.canvasWidthPerc);
        const comps = [];
        const insert = new Insert();
        for (let i = 0; i < compsDb.length; i++) {
            const compDb = compsDb[i];
            const engineComp = compDb.getEngineComp(pack);
            if (engineComp.alwaysOn == false) {
                insert.add(engineComp);
            }
            comps.push(engineComp);
        }
        const bilza = new Engine(engineDb, comps, comps[0], insert.getDuration(), pack);
        return bilza;
    }
}

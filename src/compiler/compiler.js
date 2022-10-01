import Engine from "../engine/engine.js";
import FillRect from "../components/fillRect.js";
import Background from "../components/background.js";
export default class Compiler {
    constructor() {
    }
    genApp(engineDb, compsDb) {
        const comps = this.getComps(compsDb);
        const bilza = this.getEngine(engineDb, comps);
        return bilza;
    }
    getComps(compsDb) {
        const comps = [];
        for (let i = 0; i < compsDb.length; i++) {
            const compDb = compsDb[i];
            switch (compDb.compType) {
                case "fillRect":
                    const fillRect = new FillRect(0, 60, "red");
                    comps.push(fillRect);
                    break;
                case "fillRect":
                    const background = new Background(0, 60);
                    comps.push(background);
                    break;
                default:
                    break;
            }
        }
        return comps;
    }
    getEngine(engineDb, comps) {
        const engine = new Engine(engineDb.canvasId, engineDb.canvasWidthPerc, comps, null, 5);
        return engine;
    }
}

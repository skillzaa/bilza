import Engine from "../engine/engine.js";
import FillRect from "../components/fillRect.js";
import Background from "../components/background.js";
export default class Compiler {
    constructor() {
    }
    genApp(engineDb) {
        const comps = this.getComps();
        const bilza = this.getEngine(engineDb, comps);
        return bilza;
    }
    getComps() {
        const comps = [];
        const fillRect = new FillRect("red");
        fillRect.alwaysOn = true;
        comps.push(fillRect);
        return comps;
    }
    getBackground(color = "grey") {
        const bg = new Background(color);
        return bg;
    }
    getEngine(engineDb, comps) {
        const engine = new Engine(engineDb.canvasId, engineDb.canvasWidthPerc, comps);
        return engine;
    }
}

import Engine from "../engine/engine.js";
export default function getEngine(engineDb, pack, comps = []) {
    const engine = new Engine(engineDb.canvasId, engineDb.canvasWidthPerc, comps, null, 5, pack);
    return engine;
}

import Engine from "../engine/engine.js";
export default function getEngine(engineDb) {
    const engine = new Engine(engineDb.canvasId, engineDb.canvasWidthPerc, null, null, 5, pack);
    return engine;
}

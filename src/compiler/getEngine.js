import Engine from "../engine/engine.js";
export default function getEngine(engineDb, comps = [], background, duration, pack) {
    const engine = new Engine(engineDb, comps, background, duration, pack);
    return engine;
}

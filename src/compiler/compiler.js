import Engine from "../engine/engine.js";
export default class Compiler {
    constructor() {
    }
    genEngine(engineDb) {
        const engine = new Engine(engineDb.canvasId);
        return engine;
    }
}

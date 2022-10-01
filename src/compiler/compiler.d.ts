import EngineDb from "../db/engineDb.js";
import Engine from "../engine/engine.js";
import IComponent from "../facade/IComponent.js";
export default class Compiler {
    constructor();
    getEnginePack(): void;
    genApp(engineDb: EngineDb, compsDb: IComponent[]): Engine;
}
//# sourceMappingURL=compiler.d.ts.map
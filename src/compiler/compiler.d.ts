import IEngineComp from "../component/IEngineComp.js";
import EngineDb from "../db/engineDb.js";
import Engine from "../engine/engine.js";
import IComponent from "../facade/IComponent.js";
export default class Compiler {
    constructor();
    genApp(engineDb: EngineDb, compsDb: IComponent[]): Engine;
    getComps(compsDb: IComponent[]): IEngineComp[];
    getEngine(engineDb: EngineDb, comps: IEngineComp[]): Engine;
}
//# sourceMappingURL=compiler.d.ts.map
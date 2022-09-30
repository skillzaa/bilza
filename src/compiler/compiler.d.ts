import IEngineComp from "../component/IEngineComp.js";
import EngineDb from "../db/engineDb.js";
import Engine from "../engine/engine.js";
import Background from "../components/background.js";
export default class Compiler {
    constructor();
    genApp(engineDb: EngineDb): Engine;
    getComps(): IEngineComp[];
    getBackground(color?: string): Background;
    getEngine(engineDb: EngineDb, comps: IEngineComp[]): Engine;
}
//# sourceMappingURL=compiler.d.ts.map
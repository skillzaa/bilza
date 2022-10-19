import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
import Linker from "../../facade/linker.js";
export default class FillRectDb extends CompDb {
    constructor(linker: Linker, color: string);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=fillRectDb.d.ts.map
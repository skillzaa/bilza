import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
export default class FillRectDb extends CompDb {
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn");
    getEngineCom(pack: Pack): compEngine;
}
//# sourceMappingURL=fillRectDb.d.ts.map
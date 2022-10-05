import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
export default class FillRectDb extends CompDb {
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, color: string);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=fillRectDb.d.ts.map
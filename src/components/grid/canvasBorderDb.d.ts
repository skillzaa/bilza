import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import ICanvasBorder from "./ICanvasBorder.js";
import Pack from "../../pack/pack.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
export default class CanvasBorderDb extends CompDb implements ICanvasBorder {
    borderWidth: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", color?: string, width?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=canvasBorderDb.d.ts.map
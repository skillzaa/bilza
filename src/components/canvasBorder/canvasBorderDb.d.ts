import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import ICanvasBorder from "./ICanvasBorder.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb } from "../../animations/animations.js";
export default class CanvasBorderDb extends CompDb implements ICanvasBorder {
    borderWidth: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, color?: string, width?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=canvasBorderDb.d.ts.map
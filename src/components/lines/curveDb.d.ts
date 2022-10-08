import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animationsFacade/animationsDb.js";
import IArc from "./ILines.js";
export default class CurveDb extends CompDb implements IArc {
    startX: AniNumberDb;
    startY: AniNumberDb;
    midX: AniNumberDb;
    midY: AniNumberDb;
    endX: AniNumberDb;
    endY: AniNumberDb;
    lineWidth: AniNumberDb;
    bracketWidth: AniNumberDb;
    showBracket: AniBooleanDb;
    colorBracket: AniColorDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, startX: number, startY: number, midX: number, midY: number, endX: number, endY: number, color?: string);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=curveDb.d.ts.map
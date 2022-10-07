import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import { AniNumberDb, AniColorDb } from "../../animationsFacade/animationsDb.js";
import IArc from "./ICurve.js";
export default class ArcDb extends CompDb implements IArc {
    startX: AniNumberDb;
    startY: AniNumberDb;
    midX: AniNumberDb;
    midY: AniNumberDb;
    endX: AniNumberDb;
    endY: AniNumberDb;
    lineWidth: AniNumberDb;
    bracketWidth: AniNumberDb;
    colorBracket: AniColorDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, startX: number, startY: number, midX: number, midY: number, endX: number, endY: number, color?: string);
    getEngineComp(pack: Pack): compEngine;
    leftMost(): AniNumberDb;
    rightMost(): AniNumberDb;
    topMost(): AniNumberDb;
    bottomMost(): AniNumberDb;
}
//# sourceMappingURL=curveDb.d.ts.map
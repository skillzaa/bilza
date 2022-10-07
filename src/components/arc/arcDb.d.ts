import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import { AniNumberDb } from "../../animationsFacade/animationsDb.js";
import IArc from "./IArc.js";
export default class ArcDb extends CompDb implements IArc {
    midX: AniNumberDb;
    midY: AniNumberDb;
    endX: AniNumberDb;
    endY: AniNumberDb;
    lineWidth: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, startX: number, startY: number, midX: number, midY: number, endX: number, endY: number, color?: string);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=arcDb.d.ts.map
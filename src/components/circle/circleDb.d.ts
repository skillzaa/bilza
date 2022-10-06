import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animationsFacade/animationsDb.js";
import ICircle from "./ICircle.js";
export default class CircleDb extends CompDb implements ICircle {
    startAngle: AniNumberDb;
    endAngle: AniNumberDb;
    filled: AniBooleanDb;
    lineWidth: AniNumberDb;
    strokeColor: AniColorDb;
    strokeWidth: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, radius: number, color: string);
    contentHeight(): number;
    contentHeightRaw(): number;
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=circleDb.d.ts.map
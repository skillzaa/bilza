import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb, AniColorDb, AniBooleanDb } from "../../animationsFacade/animationsDb.js";
import IArrow from "./IArrow.js";
export default class ArrowDb extends CompDb implements IArrow {
    x2: AniNumberDb;
    y2: AniNumberDb;
    headWidth: AniNumberDb;
    headHeight: AniNumberDb;
    headFilled: AniBooleanDb;
    colorHead: AniColorDb;
    lineWidth: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, x1: number, y1: number, x2: number, y2: number, color: string);
    getEngineComp(pack: Pack): compEngine;
    align(x?: 0 | 1 | 2 | null, y?: number | null): void;
    alignRotate(x?: 0 | 1 | 2 | null, y?: number | null): void;
    pointTo(second: number, x: number, y: number): void;
}
//# sourceMappingURL=arrowDb.d.ts.map
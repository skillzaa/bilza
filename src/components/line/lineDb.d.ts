import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb } from "../../animationsFacade/animationsDb.js";
import ILine from "./ILine.js";
export default class LineDb extends CompDb implements ILine {
    lineWidth: AniNumberDb;
    x2: AniNumberDb;
    y2: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, x1: number, y1: number, x2: number, y2: number, color?: string);
    getEngineComp(pack: Pack): compEngine;
    align(x?: number | null, y?: number | null): void;
    alignRotate(x: 0 | 1 | 2 | null, y?: number | null): void;
}
//# sourceMappingURL=lineDb.d.ts.map
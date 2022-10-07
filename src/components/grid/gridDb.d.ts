import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IGrid from "./IGrid.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animationsFacade/animationsDb.js";
export default class GridDb extends CompDb implements IGrid {
    lineDash: never[];
    cellWidth: AniNumberDb;
    cellHeight: AniNumberDb;
    showHorizontalLines: AniBooleanDb;
    showVerticalLines: AniBooleanDb;
    lineWidthVertical: AniNumberDb;
    lineWidthHorizontal: AniNumberDb;
    colorHorizontalLines: AniColorDb;
    colorVerticalLines: AniColorDb;
    colorNumbers: AniColorDb;
    showNumbers: AniBooleanDb;
    fontSize: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, color?: string, cellWidth?: number, cellHeight?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=gridDb.d.ts.map
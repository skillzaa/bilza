import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IGrid from "./IGrid.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb, AniPercDb, AniBooleanDb, AniColorDb } from "../../animations/animations.js";
export default class GridDb extends CompDb implements IGrid {
    lineDash: never[];
    cellWidth: AniPercDb;
    cellHeight: AniPercDb;
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
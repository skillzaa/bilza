import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IGrid from "./IGrid.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb, AniPercDb, AniBooleanDb, AniColorDb } from "../../animations/animations.js";
import Linker from "../../facade/linker.js";
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
    constructor(linker: Linker, color?: string, cellWidth?: number, cellHeight?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=gridDb.d.ts.map
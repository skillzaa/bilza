import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IGrid from "./IGrid.js";
import Pack from "../../pack/pack.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
import AniColorDb from "../../animationsFacade/aniColorDb/AniColorDb.js";
import AniBooleanDb from "../../animationsFacade/aniBooleanDb/AniBooleanDb.js";
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
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", color?: string, cellWidth?: number, cellHeight?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=gridDb.d.ts.map
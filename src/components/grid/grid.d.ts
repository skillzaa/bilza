import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, AniBoolean, AniColor, AniPerc } from "../../animations/animations.js";
import GridDb from "./gridDb.js";
export default class Grid extends CompEngine {
    lineDash: number[];
    cellWidth: AniPerc;
    cellHeight: AniPerc;
    showHorizontalLines: AniBoolean;
    showVerticalLines: AniBoolean;
    lineWidthVertical: AniNumber;
    lineWidthHorizontal: AniNumber;
    colorHorizontalLines: AniColor;
    colorVerticalLines: AniColor;
    colorNumbers: AniColor;
    showNumbers: AniBoolean;
    fontSize: AniNumber;
    constructor(gridDb: GridDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawGridLine(p: Pack, x1: number, y1: number, x2: number, y2: number, theNumber: number, hv: string): void;
    drawText(p: Pack, theNumber: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map
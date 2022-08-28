import { Pack } from "../bilza.js";
import { AniNumber, AniPerc, AniBoolean, AniColor } from "../animationModule/animations.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Grid extends BaseComponent {
    lineDash: number[];
    cellWidth: AniNumber | AniPerc;
    cellHeight: AniNumber | AniPerc;
    showHorizontalLines: AniBoolean;
    showVerticalLines: AniBoolean;
    lineWidthVertical: AniNumber;
    lineWidthHorizontal: AniNumber;
    colorHorizontalLines: AniColor;
    colorVerticalLines: AniColor;
    fontSize: AniNumber;
    colorNumbers: AniColor;
    showNumbers: AniBoolean;
    constructor(cellWidth?: number, cellHeight?: number, color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    setRespCellDims(tf?: boolean): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, theNumber: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map
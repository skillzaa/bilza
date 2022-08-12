import { Pack } from "../bilza.js";
import { AniNumber, AniBoolean, AniColor } from "../animationModule/animations.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Grid extends BaseComponent {
    lineDash: number[];
    cellWidthPerc: AniNumber;
    cellHeightPerc: AniNumber;
    showHorizontalLines: AniBoolean;
    showVerticalLines: AniBoolean;
    lineWidthVertical: AniNumber;
    lineWidthHorizontal: AniNumber;
    colorHorizontalLines: AniColor;
    colorVerticalLines: AniColor;
    fontSize: AniNumber;
    colorNumbers: AniColor;
    showNumbers: AniBoolean;
    private _x_iteration;
    private _y_iteration;
    constructor(color?: string, cellWidthPerc?: number, cellHeightPerc?: number);
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, theNumber: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map
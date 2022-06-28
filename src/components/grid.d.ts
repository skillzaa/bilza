import { Pack } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Grid extends BaseComponent {
    lineDash: number[];
    cellWidthPerc: number;
    cellHeightPerc: number;
    showHorizontalLines: boolean;
    showVerticalLines: boolean;
    lineWidthVertical: number;
    lineWidthHorizontal: number;
    colorHorizontalLines: string;
    colorVerticalLines: string;
    fontSize: number;
    colorNumbers: string;
    showNumbers: boolean;
    constructor(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number);
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, content: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map
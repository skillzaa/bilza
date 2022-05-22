import { Pack } from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/BaseComponent.js";
export default class StaticGrid extends BaseComponent {
    cellWidth: number;
    cellHeight: number;
    colorHorizontalLines: string;
    colorVerticalLines: string;
    colorNumbers: string;
    flagDrawNumbers: boolean;
    flagDrawHorizontal: boolean;
    flagDrawVertical: boolean;
    lineWidthVertical: number;
    lineWidthHorizontal: number;
    fontSize: number;
    lineDash: number[];
    constructor();
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, content: number, x: number, y: number): void;
}
//# sourceMappingURL=staticGrid.d.ts.map
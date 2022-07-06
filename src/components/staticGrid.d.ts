import { Pack, AniNumber } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class StaticGrid extends BaseComponent {
    cellWidth: AniNumber;
    cellHeight: AniNumber;
    lineWidthVertical: AniNumber;
    lineWidthHorizontal: AniNumber;
    colorHorizontalLines: string;
    colorVerticalLines: string;
    colorNumbers: string;
    flagDrawNumbers: boolean;
    flagDrawHorizontal: boolean;
    flagDrawVertical: boolean;
    fontSize: number;
    lineDash: number[];
    constructor(cellWidth?: number, cellHeight?: number, color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, content: number, x: number, y: number): void;
}
//# sourceMappingURL=staticGrid.d.ts.map
import { Pack } from "../bilza.js";
import { AniNumber, AniBoolean, AniColor } from "../animationModule/animations.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class StaticGrid extends BaseComponent {
    cellWidth: AniNumber;
    cellHeight: AniNumber;
    lineWidthVertical: AniNumber;
    lineWidthHorizontal: AniNumber;
    colorHorizontalLines: AniColor;
    colorVerticalLines: AniColor;
    colorNumbers: AniColor;
    showNumbers: AniBoolean;
    drawHorizontal: AniBoolean;
    drawVertical: AniBoolean;
    fontSize: AniNumber;
    lineDash: number[];
    constructor(cellWidth?: number, cellHeight?: number, color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, content: number, x: number, y: number): void;
}
//# sourceMappingURL=staticGrid.d.ts.map
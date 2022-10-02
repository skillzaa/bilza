import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import ComponentPack from "../componentPack/componentPack.js";
import { AniNumber, AniBoolean, AniColor } from "../animations/animations.js";
export default class Grid extends Component {
    lineDash: number[];
    cellWidth: AniNumber;
    cellHeight: AniNumber;
    showHorizontalLines: AniBoolean;
    showVerticalLines: AniBoolean;
    lineWidthVertical: AniNumber;
    lineWidthHorizontal: AniNumber;
    colorHorizontalLines: AniColor;
    colorVerticalLines: AniColor;
    fontSize: AniNumber;
    colorNumbers: AniColor;
    showNumbers: AniBoolean;
    constructor(startTime: number, endTime: number, componentPack: ComponentPack, cellWidth?: number, cellHeight?: number, color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawGridLine(p: Pack, x1: number, y1: number, x2: number, y2: number, theNumber: number, hv: string): void;
    drawText(p: Pack, theNumber: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map
import { Pack } from "../bilza.js";
import { AniNumber, AniBoolean } from "../animationModule/animations.js";
import Text from "./text-dynamicFontSize.js";
import Line from "./line.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class StaticGrid extends BaseComponent {
    numbers: Text;
    lineVertical: Line;
    lineHorizontal: Line;
    cellWidth: AniNumber;
    cellHeight: AniNumber;
    drawNumbers: AniBoolean;
    drawHorizontal: AniBoolean;
    drawVertical: AniBoolean;
    constructor(cellWidth?: number, cellHeight?: number, color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, content: number, x: number, y: number): void;
}
//# sourceMappingURL=staticGrid-new.d.ts.map
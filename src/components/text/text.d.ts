import { Component, Pack, FontNames } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import CalcData from "./calcData.js";
export default class Text extends Component<ObjectData> {
    protected calcData: CalcData;
    fontFamilyNames: typeof FontNames;
    constructor(content?: string, fontColor?: string, fontSize?: number, msStart?: number, msEnd?: number, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack, perc?: number): number;
    update(ms: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    drawContentArea(p: Pack): void;
    drawText(p: Pack): void;
    contentHeight(p: Pack, perc?: number): number;
    contentWidth(p: Pack): number;
    drawPadding(p: Pack): void;
    drawBorder(p: Pack): void;
    drawMargin(p: Pack): void;
    drawBoundingRectangle(p: Pack, color?: string, lineWidth?: number): void;
    checkCollision(x: number, y: number, p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map
import { Pack, Style } from "../../Bilza.js";
export default class TextBase {
    content: string;
    fontFamily: string;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    border: number;
    maxDisplayChars: number;
    x: number;
    y: number;
    fontSize: number;
    color: string;
    colorBorder: string;
    colorBg: string;
    showContent: boolean;
    showBg: boolean;
    showTextShadow: boolean;
    showBorderShadow: boolean;
    showBgShadow: boolean;
    private widthForInternalUse;
    private heightForInternalUse;
    constructor(content?: string, colorHax?: string, fontSize?: number, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    private drawBorder;
    drawBg(p: Pack, style: Style): boolean;
    drawContent(p: Pack, style: Style): false | undefined;
}
//# sourceMappingURL=textBase.d.ts.map
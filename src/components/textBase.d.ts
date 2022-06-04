import { Pack, Style } from "../Bilza.js";
export default class TextBase {
    style: Style;
    g: any;
    content: string;
    fontFamily: string;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    border: number;
    maxDisplayChars: number;
    fontSize: number;
    color: string;
    colorBorder: string;
    colorBg: string;
    showContent: boolean;
    showBg: boolean;
    showTextShadow: boolean;
    showBorderShadow: boolean;
    showBgShadow: boolean;
    constructor(content?: string, colorHax?: string, fontSize?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private drawBorder;
    private drawBg;
    private drawContent;
}
//# sourceMappingURL=textBase.d.ts.map
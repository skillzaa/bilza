import { Pack, BaseComponent, FontFamily } from "../../Bilza.js";
export default class Text extends BaseComponent {
    content: string;
    fontFamily: FontFamily;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    fontSize: number;
    border: number;
    maxDisplayChars: number;
    color: string;
    colorBorder: string;
    colorBg: string;
    showContent: boolean;
    showBg: boolean;
    showTextShadow: boolean;
    showBorderShadow: boolean;
    showBgShadow: boolean;
    private realWidth;
    private realHeight;
    constructor(content?: string, colorHax?: string, fontSize?: number, x?: number, y?: number);
    update(msDelta: number, p: Pack): boolean;
    width(): number;
    height(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map
import { Pack, Style, FontFamily } from "../../Bilza.js";
export default class TextUtil {
    constructor();
    static contentWidth(p: Pack, content: string, maxDisplayChars: number, fontSize: number, fontFamily: FontFamily): number;
    static realWidth(p: Pack, content: string, maxDisplayChars: number, fontSize: number, fontFamily: FontFamily, paddingLeft: number, paddingRight: number): number;
    static realHeight(p: Pack, fontSize: number, fontFamily: FontFamily, paddingTop: number, paddingBottom: number): number;
    drawBorder(p: Pack, style: Style, x: number, y: number, borderWidth: number, width: number, height: number): boolean;
    static drawBg(p: Pack, style: Style, x: number, y: number, width: number, height: number): boolean;
    static drawContent(p: Pack, style: Style, content: string, x: number, y: number, maxDisplayChars: number, paddingLeft: number, paddingTop: number, showContent: boolean): false | undefined;
}
//# sourceMappingURL=textBase.d.ts.map
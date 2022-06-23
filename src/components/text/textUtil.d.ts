import { Pack, Style, FontFamily } from "../../bilza.js";
export default class TextUtil {
    constructor();
    static contentWidth(p: Pack, content: string, maxDisplayChars: number, fontSize: number, fontFamily: FontFamily): number;
    static drawBorder(p: Pack, style: Style, x: number, y: number, borderWidth: number, width: number, height: number): boolean;
    static drawBg(p: Pack, style: Style, x: number, y: number, width: number, height: number): boolean;
    static drawContent(p: Pack, style: Style, content: string, x: number, y: number, maxDisplayChars: number, paddingLeft: number, paddingTop: number, showContent: boolean): false | undefined;
}
//# sourceMappingURL=textUtil.d.ts.map
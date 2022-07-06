import { Pack, BaseComponent, FontFamily, AniNumber, Style } from "../bilza.js";
export default class PlainText extends BaseComponent {
    content: string;
    fontFamily: FontFamily;
    paddingLeft: AniNumber;
    paddingRight: AniNumber;
    paddingTop: AniNumber;
    paddingBottom: AniNumber;
    fontSize: AniNumber;
    border: AniNumber;
    maxDisplayChars: number;
    color: string;
    colorBorder: string;
    colorBg: string;
    showContent: boolean;
    showBg: boolean;
    showTextShadow: boolean;
    showBorderShadow: boolean;
    showBgShadow: boolean;
    constructor(content?: string, colorHax?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    heightInPix(): number;
    widthInPix(): number;
    draw(p: Pack): boolean;
    drawBorder(p: Pack, style: Style, x: number, y: number, borderWidth: number, width: number, height: number): boolean;
    drawBg(p: Pack, style: Style, x: number, y: number, width: number, height: number): boolean;
    drawContent(p: Pack, style: Style, content: string, x: number, y: number, maxDisplayChars: number, paddingLeft: number, paddingTop: number, showContent: boolean): false | undefined;
}
//# sourceMappingURL=plainText.d.ts.map
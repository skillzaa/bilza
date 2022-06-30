import { Pack, BaseComponent, FontFamily, AniNumber } from "../../bilza.js";
export default class PlainText extends BaseComponent {
    content: string;
    fontFamily: FontFamily;
    paddingLeft: AniNumber;
    paddingRight: AniNumber;
    paddingTop: AniNumber;
    paddingBottom: AniNumber;
    fontSize: number;
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
    height(): number;
    width(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=plainText.d.ts.map
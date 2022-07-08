import { Pack, BaseComponent, FontFamily, AniNumber, AniColor, AniString } from "../bilza.js";
export default class RawText extends BaseComponent {
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    color: AniColor;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    heightInPix(): number;
    widthInPix(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
}
//# sourceMappingURL=rawText.d.ts.map
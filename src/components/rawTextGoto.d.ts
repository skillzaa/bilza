import { Pack, BaseComponent, FontFamily, AniNumber } from "../bilza.js";
import AniString from "../animations/aniString/aniString.js";
export default class RawText extends BaseComponent {
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    color: string;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    heightInPix(): number;
    widthInPix(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
}
//# sourceMappingURL=rawTextGoto.d.ts.map
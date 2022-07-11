import { Pack, AniNumber, AniColor, AniBoolean } from "../bilza.js";
import RawText from "./rawText.js";
import AniNoPerc from "../animations/aniNoPerc/AniNoPerc.js";
export default class PlainText extends RawText {
    paddingTop: AniNoPerc;
    paddingBottom: AniNoPerc;
    paddingRight: AniNoPerc;
    paddingLeft: AniNoPerc;
    border: AniNumber;
    maxHeight: number;
    colorBackground: AniColor;
    colorBorder: AniColor;
    showBackground: AniBoolean;
    constructor(content?: string, colorHax?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
    drawBackground(p: Pack): void;
    drawBorder(p: Pack): void;
    drawContent(p: Pack): void;
}
//# sourceMappingURL=plainText.d.ts.map
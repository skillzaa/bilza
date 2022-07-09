import { Pack, AniNumber, AniColor, AniBoolean } from "../bilza.js";
import RawText from "./rawText.js";
import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";
export default class PlainText extends RawText {
    paddingTop: AniNoYPerc;
    paddingBottom: AniNoYPerc;
    paddingRight: AniNoXPerc;
    paddingLeft: AniNoXPerc;
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
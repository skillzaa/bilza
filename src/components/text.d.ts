import { Pack, AniNumber, AniColor } from "../bilza.js";
import RawText from "./rawText.js";
import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";
export default class Text extends RawText {
    paddingTop: AniNoYPerc;
    paddingBottom: AniNoYPerc;
    paddingRight: AniNoXPerc;
    paddingLeft: AniNoXPerc;
    border: AniNumber;
    maxHeight: number;
    colorBackground: AniColor;
    colorBorder: AniColor;
    constructor(content?: string, colorHax?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
    drawBackground(p: Pack): void;
    drawBorder(p: Pack): void;
    drawContent(p: Pack): void;
    private dynamicFontSize;
    private reqWdInPixForFontSize;
    private shrinkToFitMaxHeight;
    private applyBoth;
}
//# sourceMappingURL=text.d.ts.map
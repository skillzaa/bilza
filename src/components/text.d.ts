import { Pack, AniNumber, AniColor, AniBoolean } from "../bilza.js";
import RawText from "./rawText.js";
export default class Text extends RawText {
    fitTextToWidth: boolean;
    maxHeight: number;
    border: AniNumber;
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
    private dynamicFontSize;
    private shrinkToFitMaxHeight;
}
//# sourceMappingURL=text.d.ts.map
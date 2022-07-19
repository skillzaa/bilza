import { Pack, BaseComponent, FontFamily, AniNumber, AniString } from "../bilza.js";
export default class RawText extends BaseComponent {
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    fitTextToWidth: boolean;
    shrinkTextToHeight: boolean;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    contentWidth(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
    private dynamicFontSize;
    private shrinkToFitMaxHeight;
}
//# sourceMappingURL=text.d.ts.map
import { Pack, AniString, BaseComponent, AniNumber, FontFamily } from "../bilza.js";
export default class Text extends BaseComponent {
    content: AniString;
    maxDisplayChars: AniNumber;
    fontFamily: FontFamily;
    private fontSize;
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
import { Pack, BaseComponent, FontFamily } from "../bilza.js";
import { AniNumber, AniString } from "../animationModule/animations.js";
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
//# sourceMappingURL=text-old.d.ts.map
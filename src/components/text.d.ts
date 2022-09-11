import { Pack, BaseComponent, FontFamily } from "../bilza.js";
import { AniNumber, AniString, AniBoolean } from "../animationModule/animations.js";
import TextTempl from "../templates/textTempl.js";
import TextTheme from "../templates/textTheme.js";
export default class Text extends BaseComponent {
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    fitToWidth: AniBoolean;
    fitToHeight: AniBoolean;
    respFontSize: AniBoolean;
    templ: TextTempl;
    theme: TextTheme;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    contentWidth(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
    protected fitToWidthFn(p: Pack): number | null;
    protected fitToHeightFn(p: Pack): number | null;
    protected adjestFontSize(n: number): number;
    protected shrinkToHeightFn(p: Pack): boolean;
    protected shrinkToWidthFn(p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map
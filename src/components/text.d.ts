import { Pack, BaseComponent, FontFamily } from "../bilza.js";
import { AniNumber, AniString, AniBoolean } from "../animationModule/animations.js";
import TextTempl from "../templates/textTempl.js";
import TextTheme from "../templates/textTheme.js";
export default class Text extends BaseComponent {
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    templ: TextTempl;
    theme: TextTheme;
    fitToWidth: AniBoolean;
    respFontSize: AniBoolean;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    contentWidth(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
    protected fitToWidthFn(p: Pack): number | null;
    protected adjestFontSize(n: number): number;
}
//# sourceMappingURL=text.d.ts.map
import { Pack, BaseComponent, FontFamily } from "../bilza.js";
import { AniNumber, AniString, AniBoolean } from "../animationModule/animations.js";
import TextTempl from "../templates/textTempl.js";
import TextTheme from "../templates/textTheme.js";
import EntryAni from "../templates/entryAni.js";
import ExitAni from "../templates/exitAni.js";
export default class Text extends BaseComponent {
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    templ: TextTempl;
    theme: TextTheme;
    entryAni: EntryAni;
    exitAni: ExitAni;
    fitToWidth: AniBoolean;
    shrinkToHeight: AniBoolean;
    respFontSize: AniBoolean;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    contentWidth(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
    protected fitToWidthFn(p: Pack): number | null;
    protected adjestFontSize(n: number): number;
    protected shrinkToHeightFn(p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map
import { Pack, BaseComponent, FontFamily } from "../bilza.js";
import { AniNumber, AniString } from "../animationModule/animations.js";
import TextTempl from "../templates/textTempl.js";
import TextTheme from "../templates/textTheme.js";
export default class Text extends BaseComponent {
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    templ: TextTempl;
    theme: TextTheme;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    contentWidth(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
}
//# sourceMappingURL=text.d.ts.map
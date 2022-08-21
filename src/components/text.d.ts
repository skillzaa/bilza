import { Pack } from "../bilza.js";
import { AniBoolean } from "../animationModule/animations.js";
import RawText from "./rawText.js";
export default class Text extends RawText {
    fitTextToWidth: AniBoolean;
    fitTextToHeight: AniBoolean;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    private dynamicFontSize;
    private shrinkToFitMaxHeight;
}
//# sourceMappingURL=text.d.ts.map
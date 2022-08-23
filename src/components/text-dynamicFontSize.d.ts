import { Pack } from "../bilza.js";
import { AniBoolean } from "../animationModule/animations.js";
import RawText from "./text.js";
export default class Text extends RawText {
    fitTextToWidth: AniBoolean;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    private dynamicFontSize;
}
//# sourceMappingURL=text-dynamicFontSize.d.ts.map
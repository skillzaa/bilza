import { Pack } from "../bilza.js";
import RawText from "./rawText.js";
export default class Text extends RawText {
    fitTextToWidth: boolean;
    shrinkTextToHeight: boolean;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    private dynamicFontSize;
    private shrinkToFitMaxHeight;
}
//# sourceMappingURL=text.d.ts.map
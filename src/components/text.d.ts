import { Pack } from "../bilza.js";
import PlainText from "./plainText.js";
export default class Text extends PlainText {
    fitTextToWidth: boolean;
    maxHeight: number;
    constructor(content?: string, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    private dynamicFontSize;
    private shrinkToFitMaxHeight;
    private applyBoth;
}
//# sourceMappingURL=text.d.ts.map
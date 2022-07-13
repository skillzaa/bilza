import { Pack } from "../bilza.js";
import RawText from "./rawText.js";
export default class Text extends RawText {
    fitTextToWidth: boolean;
    maxHeight: number;
    constructor(content?: string, colorHax?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
    private dynamicFontSize;
    private shrinkToFitMaxHeight;
}
//# sourceMappingURL=text.d.ts.map
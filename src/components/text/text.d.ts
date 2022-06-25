import { Pack, AniNumber } from "../../bilza.js";
import Text002 from "./text002.js";
export default class Text extends Text002 {
    useDynWidth: boolean;
    useMaxHeight: boolean;
    dynWidth: AniNumber;
    maxHeight: number;
    constructor(content?: string, colorHax?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    private dynamicFontSize;
    private reqWdInPixForFontSize;
    private shrinkToFitMaxHeight;
}
//# sourceMappingURL=text.d.ts.map
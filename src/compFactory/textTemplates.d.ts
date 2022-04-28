import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTemplates {
    private addToArray;
    private util;
    constructor(comps?: IComponent[]);
    hdg(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, x?: number, y?: number): Text;
    jt(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
}
//# sourceMappingURL=textTemplates.d.ts.map
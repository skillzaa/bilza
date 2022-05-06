import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTemplates {
    private insert;
    private util;
    constructor(insert: (comp: IComponent) => IComponent);
    h1(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    jt(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    bulletPointMid(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string, y?: number): Text;
}
//# sourceMappingURL=textTemplates.d.ts.map
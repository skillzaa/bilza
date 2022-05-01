import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTemplates {
    private insert;
    private util;
    constructor(insert: (comp: IComponent) => IComponent);
    h1(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, x?: number, y?: number, dynWidth?: number, dynHeight?: number): Text;
    hdg(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, x?: number, y?: number): Text;
    jt(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
}
//# sourceMappingURL=textTemplates.d.ts.map
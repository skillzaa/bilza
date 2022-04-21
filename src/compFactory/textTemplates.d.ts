import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTemplates {
    private addToArray;
    constructor(comps?: IComponent[]);
    jt(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, colorBg?: string | null, x?: number, y?: number, widthPercent?: number, heightPercent?: number): Text;
    h1(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, colorBg?: string | null, x?: number, y?: number, widthPercent?: number, heightPercent?: number): Text;
    li(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, colorBg?: string | null, x?: number, y?: number, widthPercent?: number, heightPercent?: number): Text;
}
//# sourceMappingURL=textTemplates.d.ts.map
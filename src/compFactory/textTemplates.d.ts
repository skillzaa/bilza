import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTemplates {
    private addToArray;
    constructor(comps: IComponent[]);
    hdg(content?: string, bgHax?: string, fontColor?: string | null, x?: number, y?: number, widthPercent?: number, heightPercent?: number): Text;
    li(content?: string, bgHax?: string, fontColor?: string | null, x?: number, y?: number): Text;
    h1(content?: string, bgHax?: string, fontColor?: string | null): Text;
}
//# sourceMappingURL=textTemplates.d.ts.map
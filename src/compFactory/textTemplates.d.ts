import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTemplates {
    private addToArray;
    constructor(comps: IComponent[]);
    demo(content?: string, msStart?: number, msEnd?: number, fontColor?: string, fontSize?: number, x?: number, y?: number): Text;
    txt(content?: string, msStart?: number, msEnd?: number, fontColor?: string, fontSize?: number, x?: number, y?: number): Text;
    txtBg(content?: string, msStart?: number, msEnd?: number, fontColor?: string, fontSize?: number, bgColor?: string, x?: number, y?: number): Text;
    shadowRect(content?: string, msStart?: number, msEnd?: number, fontColor?: string, rectColor?: string, fontSize?: number, x?: number, y?: number): Text;
}
//# sourceMappingURL=textTemplates.d.ts.map
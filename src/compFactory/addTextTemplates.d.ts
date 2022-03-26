import { IDrawable } from "../index.js";
import Text from "../components/text/text.js";
export default class AddTextTemplates {
    private addToArray;
    constructor(comps: IDrawable[]);
    demo(content?: string, msStart?: number, msEnd?: number, fontColor?: string, fontSize?: number, x?: number, y?: number): Text;
    txt(content?: string, msStart?: number, msEnd?: number, fontColor?: string, fontSize?: number, x?: number, y?: number): Text;
    txtBg(content?: string, msStart?: number, msEnd?: number, fontColor?: string, fontSize?: number, bgColor?: string, x?: number, y?: number): Text;
    shadowRect(content?: string, msStart?: number, msEnd?: number, fontColor?: string, rectColor?: string, fontSize?: number, x?: number, y?: number): Text;
}
//# sourceMappingURL=addTextTemplates.d.ts.map
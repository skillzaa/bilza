import Pack from "../pack/pack.js";
import BaseComp from "../component/baseComp.js";
import CompData from "../component/compData.js";
declare class TextData extends CompData {
    content: string;
    constructor(frameStart?: number, content?: string, x?: number, y?: number);
}
export default class Text extends BaseComp {
    compData: TextData;
    constructor(frameStart: number, content?: string, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
export {};
//# sourceMappingURL=text.d.ts.map
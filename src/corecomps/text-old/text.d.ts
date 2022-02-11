import { BaseComp, Pack, Style } from "../../bilzaa2d/index.js";
import TextData from "./textData.js";
import TextDataNull from "./textDataNull.js";
export default class Text extends BaseComp {
    dataTransitions: TextDataNull[];
    compData: TextData;
    constructor(content?: string, x?: number, y?: number, style?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    newDataTransition(frame?: number): TextDataNull;
    addDataTransition(cd: TextDataNull): boolean;
    applyDataTransitons(frame: number): void;
    merge(subset: TextDataNull): boolean;
}
//# sourceMappingURL=text.d.ts.map
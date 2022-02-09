import { BaseComp, Pack, Style } from "../../bilzaa2d/index.js";
export default class Icon extends BaseComp {
    x: number;
    y: number;
    code: number;
    constructor(code?: number, x?: number, y?: number, incomTempl?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=icon.d.ts.map
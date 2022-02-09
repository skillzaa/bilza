import { BaseComp, Pack, Style } from "../../bilzaa2d/index.js";
export default class IconAdv extends BaseComp {
    x: number;
    y: number;
    code: number;
    backgroundColor: string;
    iconColor: string;
    caption: string;
    constructor(code?: number, x?: number, y?: number, incomTempl?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=iconAdv.d.ts.map
import { BaseComp, Pack, Style } from "../../bilzaa2d/index.js";
export default class Rectangle extends BaseComp {
    x: number;
    y: number;
    rectWidth: number;
    rectHeight: number;
    constructor(x: number, y: number, width: number, height: number, incomTempl: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rectangle.d.ts.map
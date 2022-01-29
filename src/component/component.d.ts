import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
export default class Component implements IDrawable {
    drawLayer: DrawLayer;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack, startingX: number, startingY: number): boolean;
}
//# sourceMappingURL=component.d.ts.map
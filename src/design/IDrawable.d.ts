import Pack from "../pack/pack.js";
import Templ from "./templ.js";
import { DrawLayer } from "./drawLayer.js";
export default interface IDrawable {
    drawLayer: DrawLayer;
    transitions: Templ[];
    templ: Templ;
    frameStart: number;
    frameEnd: number;
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
}
//# sourceMappingURL=IDrawable.d.ts.map
import IDrawable from "./design/IDrawable.js";
import Pack from "./pack/pack.js";
import { DrawLayer } from "./design/drawLayer.js";
import { XAlignment, YAlignment } from "./design/alignment.js";
export default class Component implements IDrawable {
    drawLayer: DrawLayer;
    frameStart: number;
    frameEnd: number;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
    moveX(x: number, p: Pack, xAlign?: XAlignment): number;
    moveY(y: number, p: Pack, yAlign?: YAlignment): number;
}
//# sourceMappingURL=component.d.ts.map
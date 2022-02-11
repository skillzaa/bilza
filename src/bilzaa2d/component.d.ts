import IDrawable from "./design/IDrawable.js";
import Pack from "./pack/pack.js";
import { DrawLayer } from "./design/drawLayer.js";
export default class Component implements IDrawable {
    drawLayer: DrawLayer;
    frameStart: number;
    frameEnd: number;
    private xy;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super to apply transitions your self.
     */
    update(frame: number, p: Pack): boolean;
    protected xPerc(n: number, p: Pack): number;
    protected yPerc(n: number, p: Pack): number;
}
//# sourceMappingURL=component.d.ts.map
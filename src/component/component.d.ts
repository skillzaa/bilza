import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import Templ from "../design/templ.js";
import Xy from "../design/xy.js";
export default class Component implements IDrawable {
    drawLayer: DrawLayer;
    templ: Templ;
    transitions: Templ[];
    frameStart: number;
    frameEnd: number;
    protected xy: Xy;
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    newTransition(frame?: number): Templ;
    addTransition(sa: Templ): boolean;
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super or apply transitions your self.
     */
    update(frame: number, p: Pack): boolean;
    applyTransitons(frame: number): void;
}
//# sourceMappingURL=component.d.ts.map
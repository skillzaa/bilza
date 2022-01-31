import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import CtxData from "../design/ctxData.js";
export default class Component implements IDrawable {
    drawLayer: DrawLayer;
    ctxData: CtxData;
    transitions: CtxData[];
    frameStart: number;
    frameEnd: number;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    newTransition(frame?: number): CtxData;
    addTransition(sa: CtxData): boolean;
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super or apply transitions your self.
     */
    update(frame: number, p: Pack): boolean;
    /**
     * Takes the current frame and apply transitions (actually ctxData objects) and merge with components ctxData.
     */
    applyTransitons(frame: number): void;
}
//# sourceMappingURL=component.d.ts.map
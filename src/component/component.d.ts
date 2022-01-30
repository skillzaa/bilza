import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import CtxData from "../design/ctxData.js";
import TransitionData from "../design/transitionData.js";
export default class Component implements IDrawable {
    drawLayer: DrawLayer;
    ctxData: CtxData;
    transitions: TransitionData[];
    frameStart: number;
    frameEnd: number;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
    addTransition(frame?: number): TransitionData;
}
//# sourceMappingURL=component.d.ts.map
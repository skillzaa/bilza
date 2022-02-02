import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import Style from "../style/style.js";
export default class BaseComp implements IDrawable {
    drawLayer: DrawLayer;
    style: Style;
    styleTransitions: Style[];
    frameStart: number;
    frameEnd: number;
    constructor(style?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    newStyleTransition(frame?: number): Style;
    addStyleTransition(sa: Style): boolean;
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super to apply transitions your self.
     */
    update(frame: number, p: Pack): boolean;
    applyStyleTransitons(frame: number): void;
    applyDataTransitons(frame: number): void;
}
//# sourceMappingURL=baseComp.d.ts.map
import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import Style from "../style/style.js";
import Xy from "../design/xy.js";
import IFrameStart from "./IFrameStart.js";
export default class Component implements IDrawable {
    drawLayer: DrawLayer;
    style: Style;
    styleTransitions: Style[];
    compData: IFrameStart;
    dataTransitions: IFrameStart[];
    frameStart: number;
    frameEnd: number;
    protected xy: Xy;
    constructor(compData: IFrameStart, style?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    newStyleTransition(frame?: number): Style;
    newDataTransition(frame?: number): IFrameStart;
    addDataTransition(cd: IFrameStart): boolean;
    addStyleTransition(sa: Style): boolean;
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super to apply transitions your self.
     */
    update(frame: number, p: Pack): boolean;
    applyStyleTransitons(frame: number): void;
    applyDataTransitons(frame: number): void;
    merge(superset: IFrameStart, subset: IFrameStart): IFrameStart;
}
//# sourceMappingURL=component-old.d.ts.map
import IDrawable from "../design/IDrawable.js";
import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import AniCtxData from "./aniCtxData.js";
export default class Component implements IDrawable {
    drawLayer: DrawLayer;
    protected animations: any[];
    frameStart: number;
    frameEnd: number;
    x: number;
    y: number;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
    addAnimation(frame?: number): AniCtxData;
}
//# sourceMappingURL=component.d.ts.map
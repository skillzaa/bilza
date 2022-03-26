import { DrawLayer, IDrawable, Pack } from "../index.js";
export default class CompsArrayObj {
    protected comps: IDrawable[];
    constructor();
    protected drawByDrawLayer(msDelta: number, drawLayer: DrawLayer, pack: Pack): boolean;
    chqCollision(x: number, y: number): IDrawable | null;
    insert(comp: IDrawable): IDrawable;
}
//# sourceMappingURL=compsArrayObj.d.ts.map
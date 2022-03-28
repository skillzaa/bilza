import { DrawLayer, IComponent, Pack } from "../Bilza.js";
export default class CompsArrayObj {
    protected comps: IComponent[];
    constructor();
    protected drawByDrawLayer(msDelta: number, drawLayer: DrawLayer, pack: Pack): boolean;
    chqCollision(x: number, y: number): IComponent | null;
    insert(comp: IComponent): IComponent;
}
//# sourceMappingURL=compsArrayObj.d.ts.map
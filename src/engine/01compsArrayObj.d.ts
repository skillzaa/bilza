import { DrawLayer, IComponent, Pack } from "../Bilza.js";
export default class CompsArrayObj {
    protected comps: IComponent[];
    constructor();
    protected drawByDrawLayer(msDelta: number, drawLayer: DrawLayer, pack: Pack): boolean;
    chqCollision(x: number, y: number): IComponent | null;
    insert(comp: IComponent): IComponent;
    resize(width?: number, height?: number): void;
}
//# sourceMappingURL=01compsArrayObj.d.ts.map
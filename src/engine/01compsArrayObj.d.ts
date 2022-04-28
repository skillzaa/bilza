import { DrawLayer, IComponent, Pack } from "../Bilza.js";
import Fn from "../functions/fn.js";
export default class CompsArrayObj {
    protected comps: IComponent[];
    util: Fn;
    constructor();
    protected drawByDrawLayer(msDelta: number, drawLayer: DrawLayer, pack: Pack): boolean;
    chqCollision(x: number, y: number): IComponent | null;
    resize(width?: number, height?: number): void;
}
//# sourceMappingURL=01compsArrayObj.d.ts.map
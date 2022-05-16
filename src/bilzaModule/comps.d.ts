import { DrawLayer, IComponent, Pack } from "../Bilza";
export default class Comps {
    compArray: IComponent[];
    constructor();
    push(comp: IComponent): IComponent;
    initAll(pack: Pack): boolean;
    resizeAll(width?: number, height?: number): boolean;
    drawByDrawLayer(msDelta: number, drawLayer: DrawLayer, pack: Pack): boolean;
    qualifyForDraw(comp: IComponent, msDelta: number): boolean;
    len(): number;
}
//# sourceMappingURL=comps.d.ts.map
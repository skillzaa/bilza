import { DrawLayer, IComponent, Pack } from "../../Bilza.js";
export default class Comps {
    protected compsArray: IComponent[];
    private pack;
    constructor(pack: Pack);
    insert(comp: IComponent): IComponent;
    init(): boolean;
    drawByDrawLayer(msDelta: number, drawLayer: DrawLayer, pack: Pack): boolean;
    resizeAll(width?: number, height?: number): boolean;
}
//# sourceMappingURL=comps.d.ts.map
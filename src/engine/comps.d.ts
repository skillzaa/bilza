import { DrawLayer, IComponent, Pack } from "../Bilza.js";
export default class Comps {
    compsArray: IComponent[];
    private pack;
    constructor(pack: Pack);
    init(): boolean;
    drawByDrawLayer(msDelta: number, drawLayer: DrawLayer, pack: Pack): boolean;
    qualifyForDraw(comp: IComponent, msDelta: number): boolean;
    resizeAll(width?: number, height?: number): boolean;
}
//# sourceMappingURL=comps.d.ts.map
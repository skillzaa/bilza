import IEngineComp from "../component/IEngineComp.js";
import Pack from "../pack/pack.js";
export default class Comps {
    compArray: IEngineComp[];
    constructor();
    push(comp: IEngineComp): IEngineComp;
    drawByDrawLayer(msDelta: number, drawLayer: 0 | 1 | 2 | 3 | 4, pack: Pack): boolean;
    qualifyForDraw(comp: IEngineComp, msDelta: number): boolean;
    len(): number;
}
//# sourceMappingURL=comps.d.ts.map
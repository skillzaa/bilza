import IEngineComp from "../component/IEngineComp.js";
import Background from "../components/background.js";
import Pack from "../pack/pack.js";
export default class EnginePack {
    canvasId: string;
    canvasWidthPerc: number;
    comps: IEngineComp[];
    background: Background | null;
    duration: number;
    pack: Pack;
    constructor(canvasId: string | undefined, canvasWidthPerc: number | undefined, comps: IEngineComp[] | undefined, background: Background | null | undefined, duration: number, pack: Pack);
}
//# sourceMappingURL=enginePack.d.ts.map
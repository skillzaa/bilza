import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import PicDb from "./picDb.js";
export default class Pic extends CompEngine {
    readonly img: HTMLImageElement;
    readonly orignalWidth: number;
    readonly orignalHeight: number;
    constructor(corePropsDb: PicDb, pack: Pack);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=pic.d.ts.map
import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import LinesDb from "./linesDb.js";
import ILinesSubComp from "./ILinesSubComp.js";
export default class Lines extends CompEngine {
    data: ILinesSubComp[];
    constructor(linesDb: LinesDb, pack: Pack);
    draw(p: Pack): boolean;
    private resolveX;
    private resolveY;
}
//# sourceMappingURL=lines.d.ts.map
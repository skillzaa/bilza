import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import LinesDb from "./linesDb.js";
import IPrimtive from "../../primtivecomps/IPrimtive.js";
export default class Lines extends CompEngine {
    data: IPrimtive[];
    constructor(linesDb: LinesDb, pack: Pack);
    draw(p: Pack): boolean;
    private resolveX;
    private resolveY;
}
//# sourceMappingURL=lines.d.ts.map
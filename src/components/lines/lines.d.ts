import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import LineStruct from "./lineStruct.js";
import LinesDb from "./linesDb.js";
export default class Lines extends CompEngine {
    data: LineStruct[];
    constructor(linesDb: LinesDb, pack: Pack);
    draw(p: Pack): boolean;
    private resolveX;
    private resolveY;
}
//# sourceMappingURL=lines.d.ts.map
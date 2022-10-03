import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CorePropsDb from "../../compDb/corePropsDb.js";
export default class FillRect extends CompEngine {
    constructor(corePropsDb: CorePropsDb, pack: Pack, color?: string);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=fillRect.d.ts.map
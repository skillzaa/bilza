import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CorePropsDb from "../../compDb/corePropsDb.js";
export default class Background extends CompEngine {
    constructor(corePropsDb: CorePropsDb, pack: Pack, color?: string);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=background.d.ts.map
import { AniColorDb } from "../../animations/animations.js";
import CompDb from "../../compDb/compDb.js";
import CompEngine from "../../compEngine/compEngine.js";
import Pack from "../../pack/pack.js";
import Linker from "../../facade/linker.js";
export default class BackgroundDb extends CompDb {
    color: AniColorDb;
    constructor(linker: Linker, color?: string);
    getEngineComp(pack: Pack): CompEngine;
}
//# sourceMappingURL=backgroundDb.d.ts.map
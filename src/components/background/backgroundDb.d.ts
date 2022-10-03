import AniColorDb from "../../animationsFacade/AniColorDb.js";
import CompDb from "../../compDb/compDb.js";
import CompEngine from "../../compEngine/compEngine.js";
import Pack from "../../pack/pack.js";
export default class BackgroundDb extends CompDb {
    color: AniColorDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", color?: string);
    getEngineComp(pack: Pack): CompEngine;
}
//# sourceMappingURL=backgroundDb.d.ts.map
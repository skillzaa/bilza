import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
export default class RectDb extends CompDb {
    lineWidth: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", color: string);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=rectDb.d.ts.map
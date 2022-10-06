import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
import IRect from "./IText.js";
export default class RectDb extends CompDb implements IRect {
    lineWidth: AniNumberDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, color: string);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=rectDb.d.ts.map
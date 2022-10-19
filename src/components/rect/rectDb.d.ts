import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb } from "../../animations/animations.js";
import IRect from "./IRect.js";
import Linker from "../../facade/linker.js";
export default class RectDb extends CompDb implements IRect {
    lineWidth: AniNumberDb;
    constructor(linker: Linker, color: string);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=rectDb.d.ts.map
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import ICanvasBorder from "./ICanvasBorder.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb } from "../../animations/animations.js";
import Linker from "../../facade/linker.js";
export default class CanvasBorderDb extends CompDb implements ICanvasBorder {
    borderWidth: AniNumberDb;
    constructor(linker: Linker, color?: string, width?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=canvasBorderDb.d.ts.map
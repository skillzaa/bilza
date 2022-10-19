import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animations/animations.js";
import ICircle from "./ICircle.js";
import Linker from "../../facade/linker.js";
export default class CircleDb extends CompDb implements ICircle {
    startAngle: AniNumberDb;
    endAngle: AniNumberDb;
    filled: AniBooleanDb;
    lineWidth: AniNumberDb;
    strokeColor: AniColorDb;
    strokeWidth: AniNumberDb;
    constructor(linker: Linker, radius: number, color: string);
    contentHeight(): number;
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=circleDb.d.ts.map
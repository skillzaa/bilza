import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IArrow from "./IArrow.js";
import { AniNumberDb, AniPercDb, AniColorDb, AniBooleanDb } from "../../animations/animations.js";
import Linker from "../../facade/linker.js";
export default class ArrowDb extends CompDb implements IArrow {
    x2: AniPercDb;
    y2: AniPercDb;
    headWidth: AniNumberDb;
    headHeight: AniNumberDb;
    headFilled: AniBooleanDb;
    colorHead: AniColorDb;
    lineWidth: AniNumberDb;
    constructor(linker: Linker, x1: number, y1: number, x2: number, y2: number, color: string);
    getEngineComp(pack: Pack): compEngine;
    align(x?: 0 | 1 | 2 | null, y?: number | null): void;
    alignRotate(x?: 0 | 1 | 2 | null, y?: number | null): void;
    pointTo(second: number, x: number, y: number): void;
}
//# sourceMappingURL=arrowDb.d.ts.map
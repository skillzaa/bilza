import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IParticleSystem from "./IParticleSystem.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animations/animations.js";
import Linker from "../../facade/linker.js";
export default class ParticleSystemDb extends CompDb implements IParticleSystem {
    count: AniNumberDb;
    particleSize: AniNumberDb;
    delay: AniNumberDb;
    lineWidth: AniNumberDb;
    filled: AniBooleanDb;
    lineColor: AniColorDb;
    constructor(linker: Linker, count?: number, color?: string, delay?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=particleSystemDb.d.ts.map
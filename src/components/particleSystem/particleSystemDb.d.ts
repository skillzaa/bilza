import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IParticleSystem from "./IParticleSystem.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animationsFacade/animationsDb.js";
export default class ParticleSystemDb extends CompDb implements IParticleSystem {
    count: AniNumberDb;
    particleSize: AniNumberDb;
    delay: AniNumberDb;
    lineWidth: AniNumberDb;
    filled: AniBooleanDb;
    lineColor: AniColorDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, count?: number, color?: string, delay?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=particleSystemDb.d.ts.map
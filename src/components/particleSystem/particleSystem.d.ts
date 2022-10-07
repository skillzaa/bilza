import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, AniBoolean, AniColor } from "../../animations/animations.js";
import ParticleSystemDb from "./particleSystemDb.js";
export default class ParticleSystem extends CompEngine {
    private skipXFrames;
    private xyArray;
    count: AniNumber;
    particleSize: AniNumber;
    lineWidth: AniNumber;
    filled: AniBoolean;
    lineColor: AniColor;
    constructor(propsDb: ParticleSystemDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private getRandomXY;
}
//# sourceMappingURL=particleSystem.d.ts.map
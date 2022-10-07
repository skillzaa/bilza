import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import ArcDb from "./arcDb.js";
import { AniNumber } from "../../animations/animations.js";
export default class Arc extends CompEngine {
    lineWidth: AniNumber;
    midX: AniNumber;
    midY: AniNumber;
    endX: AniNumber;
    endY: AniNumber;
    constructor(propsDb: ArcDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    compWidth(): number;
    compHeight(): number;
}
//# sourceMappingURL=arc%20copy.d.ts.map
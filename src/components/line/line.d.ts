import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import LineDb from "./lineDb.js";
import { AniNumber } from "../../animations/animations.js";
export default class Line extends CompEngine {
    lineWidth: AniNumber;
    x2: AniNumber;
    y2: AniNumber;
    constructor(corePropsDb: LineDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    compWidth(): number;
    compHeight(): number;
}
//# sourceMappingURL=line.d.ts.map
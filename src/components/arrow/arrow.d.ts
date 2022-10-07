import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import ArrowDb from "./arrowDb.js";
import { AniNumber, AniBoolean, AniColor } from "../../animations/animations.js";
export default class Arrow extends CompEngine {
    x2: AniNumber;
    y2: AniNumber;
    headWidth: AniNumber;
    headHeight: AniNumber;
    headFilled: AniBoolean;
    colorHead: AniColor;
    lineWidth: AniNumber;
    constructor(arrowDb: ArrowDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    compWidth(): number;
    compHeight(): number;
}
//# sourceMappingURL=arrow.d.ts.map
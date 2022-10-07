import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CurveDb from "./curveDb.js";
import { AniNumber, AniColor } from "../../animations/animations.js";
export default class Curve extends CompEngine {
    lineWidth: AniNumber;
    startX: AniNumber;
    startY: AniNumber;
    midX: AniNumber;
    midY: AniNumber;
    endX: AniNumber;
    endY: AniNumber;
    bracketWidth: AniNumber;
    colorBracket: AniColor;
    constructor(propsDb: CurveDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    leftMost(): AniNumber;
    rightMost(): AniNumber;
    topMost(): AniNumber;
    bottomMost(): AniNumber;
    private resolveX;
    private resolveY;
}
//# sourceMappingURL=curve.d.ts.map
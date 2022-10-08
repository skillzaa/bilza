import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CurveDb from "./curveDb.js";
import { AniNumber, AniBoolean, AniColor } from "../../animations/animations.js";
export default class Curve extends CompEngine {
    startX: AniNumber;
    startY: AniNumber;
    midX: AniNumber;
    midY: AniNumber;
    endX: AniNumber;
    endY: AniNumber;
    lineWidth: AniNumber;
    bracketWidth: AniNumber;
    colorBracket: AniColor;
    showBracket: AniBoolean;
    constructor(propsDb: CurveDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private resolveX;
    private resolveY;
}
//# sourceMappingURL=curve.d.ts.map
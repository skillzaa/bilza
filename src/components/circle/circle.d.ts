import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import CircleDb from "./circleDb.js";
import { AniNumber, AniBoolean, AniColor } from "../../animations/animations.js";
export default class Circle extends CompEngine {
    startAngle: AniNumber;
    endAngle: AniNumber;
    filled: AniBoolean;
    lineWidth: AniNumber;
    strokeColor: AniColor;
    strokeWidth: AniNumber;
    constructor(circleDb: CircleDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    contentHeight(): number;
}
//# sourceMappingURL=circle.d.ts.map
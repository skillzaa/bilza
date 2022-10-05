import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber } from "../../animations/animations.js";
import RectDb from "./rectDb.js";
export default class Rect extends CompEngine {
    lineWidth: AniNumber;
    constructor(corePropsDb: RectDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map
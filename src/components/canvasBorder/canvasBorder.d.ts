import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber } from "../../animations/animations.js";
import CanvasBorderDb from "./canvasBorderDb.js";
export default class CanvasBorder extends CompEngine {
    borderWidth: AniNumber;
    constructor(canvasBorderDb: CanvasBorderDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=canvasBorder.d.ts.map
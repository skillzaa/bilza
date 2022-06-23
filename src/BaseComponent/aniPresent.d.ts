import { IComponent, XAlignment, YAlignment } from "../bilza.js";
export default class AniPresent {
    private comp;
    constructor(comp: IComponent);
    TinStop(fromSec?: number, toSec?: number, x?: number, yUpto?: number, xAlign?: XAlignment, yAlign?: YAlignment): void;
    TinBout(fromSec?: number, toSec?: number, x?: number): void;
    RinStop(fromSec: number | undefined, toSec: number | undefined, xUpto: number, y?: number): void;
    RinLout(fromSec?: number, toSec?: number, y?: number): void;
    LinStop(fromSec: number | undefined, toSec: number | undefined, xUpto: number, y?: number): void;
    LinRout(fromSec?: number, toSec?: number, y?: number): void;
    BinTout(fromSec?: number, toSec?: number, x?: number): void;
    BinStop(fromSec?: number, toSec?: number, x?: number, yUpto?: number): void;
}
//# sourceMappingURL=aniPresent.d.ts.map
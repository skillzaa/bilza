import { IComponent, BaseComponent, XAlignment, YAlignment } from "../Bilza.js";
export default class AniPresent {
    private comp;
    constructor(comp: IComponent);
    TinStop(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number, yUpto?: number, xAlign?: XAlignment, yAlign?: YAlignment): void;
    TinBout(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number): void;
    RinStop(comp: BaseComponent, fromSec: number | undefined, toSec: number | undefined, xUpto: number, y?: number): void;
    RinLout(comp: BaseComponent, fromSec?: number, toSec?: number, y?: number): void;
    LinStop(comp: BaseComponent, fromSec: number | undefined, toSec: number | undefined, xUpto: number, y?: number): void;
    LinRout(comp: BaseComponent, fromSec?: number, toSec?: number, y?: number): void;
    BinTout(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number): void;
    BinStop(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number, yUpto?: number): void;
}
//# sourceMappingURL=aniPresent.d.ts.map
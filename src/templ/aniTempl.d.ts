import { BaseComponent, XAlignment, YAlignment } from "../bilza.js";
export default class AniTempl {
    static TinStop(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number, yUpto?: number, xAlign?: XAlignment, yAlign?: YAlignment): void;
    static TinBout(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number): void;
    static RinStop(comp: BaseComponent, fromSec: number | undefined, toSec: number | undefined, xUpto: number, y?: number): void;
    static RinLout(comp: BaseComponent, fromSec?: number, toSec?: number, y?: number): void;
    static LinStop(comp: BaseComponent, fromSec: number | undefined, toSec: number | undefined, xUpto: number, y?: number): void;
    static LinRout(comp: BaseComponent, fromSec?: number, toSec?: number, y?: number): void;
    static BinTout(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number): void;
    static BinStop(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number, yUpto?: number): void;
}
//# sourceMappingURL=aniTempl.d.ts.map
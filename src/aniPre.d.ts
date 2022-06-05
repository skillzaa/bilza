import { BaseComponent } from "./Bilza.js";
export default class AniPre {
    constructor();
    static LinStop(comp: BaseComponent, fromSec?: number, toSec?: number, xUpto?: number, y?: number): void;
    static TinStop(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number, yUpto?: number): void;
    static LinRout(comp: BaseComponent, fromSec?: number, toSec?: number, y?: number): void;
    static TinBout(comp: BaseComponent, fromSec?: number, toSec?: number, x?: number): void;
}
//# sourceMappingURL=aniPre.d.ts.map
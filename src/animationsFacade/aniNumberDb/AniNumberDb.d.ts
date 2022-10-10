import AniPropDb from "../../animations/aniProp/AniPropDb.js";
export default class AniNumberDb extends AniPropDb<number> {
    constructor(value: number);
    animate(StartSec: number, endSec: number, startValue: number, endValue: number): void;
    random(StartSec: number, endSec: number, min?: number, max?: number, delayInMs?: number): void;
    oscillate(StartSec: number, endSec: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number): void;
    goto(atSec: number, value: number): boolean;
}
//# sourceMappingURL=AniNumberDb.d.ts.map
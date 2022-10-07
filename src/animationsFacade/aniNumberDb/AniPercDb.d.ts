import AniPropDb from "../aniPropDb/AniPropDb.js";
export default class AniPercDb extends AniPropDb<number> {
    private theWhole;
    constructor(value: number, theWhole: number);
    value(): number;
    valuePerc(): number;
    private responsiveValue;
    animate(StartSec: number, endSec: number, startValue: number, endValue: number): void;
    random(StartSec: number, endSec: number, min?: number, max?: number, delayInMs?: number): void;
    oscillate(StartSec: number, endSec: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number): void;
    goto(atSec: number, value: number): boolean;
}
//# sourceMappingURL=AniPercDb.d.ts.map
import AniPropDb from "../aniPropDb/AniPropDb.js";
export default class AniNumberDb extends AniPropDb<number> {
    private _isResp;
    private theWhole;
    constructor(initialValue: number);
    init(theWhole?: number | null): void;
    setResp(tf: boolean, theWhole: number | null): void;
    isResp(): boolean;
    value(): number;
    valueRaw(): number;
    private responsiveValue;
    animate(StartSec: number, endSec: number, startValue: number, endValue: number): void;
    random(StartSec: number, endSec: number, min?: number, max?: number, delayInMs?: number): void;
    oscillate(StartSec: number, endSec: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number): void;
    goto(atSec: number, value: number): boolean;
    jumpBetween(startSec: number, endSec: number, firstValue: number, secondValue: number, delayInMS?: number): void;
}
//# sourceMappingURL=AniNumberDb.d.ts.map
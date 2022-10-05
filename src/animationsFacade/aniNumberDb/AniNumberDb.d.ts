import AniPropDb from "../aniPropDb/AniPropDb.js";
export default class AniNumberDb extends AniPropDb<number> {
    private _isResp;
    private theWhole;
    constructor(initialValue: number);
    private init;
    private setResp;
    isResponsive(): boolean;
    value(): number;
    valueRaw(): number;
    private responsiveValue;
    animate(StartSec: number, endSec: number, startValue: number, endValue: number): void;
    random(StartSec: number, endSec: number, min?: number, max?: number, delayInMs?: number): void;
    oscillate(StartSec: number, endSec: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number): void;
}
//# sourceMappingURL=AniNumberDb.d.ts.map
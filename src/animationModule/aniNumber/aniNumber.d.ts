import AniProp from "../aniProp/aniProp.js";
export default class AniNumber extends AniProp<number> {
    readonly minValue: number;
    readonly maxValue: number;
    private isResp;
    private theWhole;
    constructor(initialValue?: number, minValue?: number, maxValue?: number);
    init(theWhole: number): void;
    isResponsive(): boolean;
    setResponsive(): void;
    setNonResponsive(): void;
    value(): number;
    valueNR(): number;
    responsiveValue(perc: number): number;
    animate(StartSec: number, endSec: number, startValue: number, endValue: number): void;
    random(StartSec: number, endSec: number, min?: number, max?: number, delayInMs?: number): void;
    oscillate(StartSec: number, endSec: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number): void;
    vibrate(rTimeMsStart: number, rTimeMsEnd: number, offset?: number, delaySec?: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
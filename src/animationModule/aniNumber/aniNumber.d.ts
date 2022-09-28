import AniProp from "../aniProp/aniProp.js";
export default class AniNumber extends AniProp<number> {
    readonly minValue: number;
    readonly maxValue: number;
    private isResponsive;
    private theWhole;
    constructor(initialValue?: number, minValue?: number, maxValue?: number);
    setResponsive(theWhole: number): void;
    setNonResponsive(): void;
    value(): number;
    responsiveValue(perc: number): number;
    animate(StartSec: number, endSec: number, startValue: number, endValue: number): void;
    random(StartSec: number, endSec: number, min?: number, max?: number, delayInMs?: number): void;
    oscillate(StartSec: number, endSec: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number): void;
    vibrate(rTimeMsStart: number, rTimeMsEnd: number, offset?: number, delaySec?: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
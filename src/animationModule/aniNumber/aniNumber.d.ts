import AniProp from "../aniProp/aniProp.js";
export default class AniNumber extends AniProp<number> {
    readonly minValue: number;
    readonly maxValue: number;
    constructor(initialValue?: number, minValue?: number, maxValue?: number);
    animate(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number): void;
    random(rTimeMsStart: number, rTimeMsEnd: number, min?: number, max?: number, delaySec?: number): void;
    oscillate(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number): void;
    vibrate(rTimeMsStart: number, rTimeMsEnd: number, offset?: number, delaySec?: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
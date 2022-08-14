import AniProp from "../aniProp/aniProp.js";
export default class AniNumber extends AniProp<number> {
    readonly minValue: number;
    readonly maxValue: number;
    constructor(initialValue?: number, minValue?: number, maxValue?: number);
    animate(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number): void;
    random(rTimeMsStart: number, rTimeMsEnd: number, min?: number, max?: number, delayInMilliSec?: number): void;
    oscillate(rTimeMsStart: number, rTimeMsEnd: number, startValue?: number, endValue?: number, speed?: number): void;
    vibrate(rTimeMsStart: number, rTimeMsEnd: number, offset?: number, delayInMilliSec?: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
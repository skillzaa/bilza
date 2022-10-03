import AniProp from "../aniProp/aniProp.js";
export default class AniNumber extends AniProp<number> {
    constructor(initialValue?: number);
    animate(StartSec: number, endSec: number, startValue: number, endValue: number): void;
    random(StartSec: number, endSec: number, min?: number, max?: number, delayInMs?: number): void;
    oscillate(StartSec: number, endSec: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number): void;
    vibrate(rTimeMsStart: number, rTimeMsEnd: number, offset?: number, delaySec?: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
import AniProp from "../aniProp/aniProp.js";
export default class AniNumber extends AniProp<number> {
    readonly minValue: number;
    readonly maxValue: number;
    constructor(initialValue?: number, minValue?: number, maxValue?: number);
    animate(msDeltaStart: number, msDeltaEnd: number, startValue: number, endValue: number): void;
    vibrate(msDeltaStart: number, msDeltaEnd: number, offset?: number, delayInMilliSec?: number): void;
    random(msDeltaStart: number, msDeltaEnd: number, min?: number, max?: number, delayInMilliSec?: number): void;
    jumpBetween(msDeltaStart: number, msDeltaEnd: number, pointOne?: number, pointTwo?: number, delayInMilliSec?: number): void;
    oscillate(msDeltaStart: number, msDeltaEnd: number, startValue?: number, endValue?: number, speed?: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
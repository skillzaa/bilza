import AniProp from "../aniProp/aniProp.js";
export default class AniNumber extends AniProp<number> {
    readonly minValue: number;
    readonly maxValue: number;
    constructor(initialValue?: number, minValue?: number, maxValue?: number);
    goto(rTimeMs: number, value: number): boolean;
    animate(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
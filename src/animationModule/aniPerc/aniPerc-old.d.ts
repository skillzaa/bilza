import AniProp from "../aniProp/aniProp.js";
import IPercFilter from "./filters/IPercFilter.js";
export default class AniPerc extends AniProp<number> {
    readonly minValue: number;
    readonly maxValue: number;
    defaultFilter: IPercFilter<number>;
    private canvasWidthHeight;
    protected filtersArr: IPercFilter<number>[];
    constructor(initialValue?: number, responsive?: boolean, minValue?: number, maxValue?: number);
    setResponsive(tf: boolean): void;
    init(canvasWidthHeight: number): void;
    goto(rTimeMs: number, value: number): boolean;
    animate(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number): void;
    random(rTimeMsStart: number, rTimeMsEnd: number, min?: number, max?: number, delayInMilliSec?: number): void;
    jumpBetween(rTimeMsStart: number, rTimeMsEnd: number, pointOne?: number, pointTwo?: number, delayInMilliSec?: number): void;
    oscillate(rTimeMsStart: number, rTimeMsEnd: number, startValue?: number, endValue?: number, speed?: number): void;
    vibrate(rTimeMsStart: number, rTimeMsEnd: number, offset?: number, delayInMilliSec?: number): void;
}
//# sourceMappingURL=aniPerc-old.d.ts.map
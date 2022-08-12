import IFilter from "./IFilter.js";
export default class BaseFilter<T> implements IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    baseValue: T;
    private delayInMS;
    private delayInMSCounter;
    protected _animatedValue: T | null;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: T, delayInMS?: number);
    update(rTimeMs: number): boolean;
    animatedValue(): T;
    init(canvasWidthHeight: number): boolean;
    percToPix(perc: number, canvasWidthHeight: number): number;
}
//# sourceMappingURL=baseFilter.d.ts.map
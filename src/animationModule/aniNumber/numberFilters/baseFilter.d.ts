export default class BaseFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    baseValue: T;
    private delayInMS;
    private delayInMSCounter;
    protected _animatedValue: T;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: T, delayInMS?: number);
    update(rTimeMs: number): boolean;
    animatedValue(rTimeMs: number): T;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=baseFilter.d.ts.map
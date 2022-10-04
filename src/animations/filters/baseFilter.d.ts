import Delay from "./delay.js";
export default class BaseFilter<T> {
    readonly startTimeMs: number;
    readonly endTimeMs: number;
    protected delay: Delay;
    private startValue;
    private _animatedValue;
    private afterValue;
    private endValue;
    constructor(startTimeMs: number, endTimeMs: number, startValue: T, endValue: T, delaySec?: number);
    update(rTimeMs: number): boolean;
    protected isAfter(rTimeMs: number): boolean;
    protected isBefore(rTimeMs: number): boolean;
    filterValue(): T;
    timeDiff(): number;
    getStartValue(): T;
    getEndValue(): T;
    setAnimatedValue(val: T | null): T | null;
    getAnimatedValue(): T | null;
    private getAfterValue;
    setAfterValue(val: T): T;
    getRandom(min: number, max: number): number;
}
//# sourceMappingURL=baseFilter.d.ts.map
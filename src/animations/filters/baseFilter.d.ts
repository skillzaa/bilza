import IFilter from "./IFilter.js";
import Delay from "./delay.js";
export default class BaseFilter<T> implements IFilter<T> {
    readonly startTimeMs: number;
    readonly endTimeMs: number;
    delay: Delay;
    protected startValue: T;
    protected _animatedValue: T | null;
    protected afterValue: T;
    protected endValue: T;
    protected readonly delaySec: number;
    constructor(startTimeMs: number, endTimeMs: number, startValue: T, endValue: T, afterValue?: T, delaySec?: number);
    update(rTimeMs: number): void;
    protected isAfter(rTimeMs: number): boolean;
    protected isBefore(rTimeMs: number): boolean;
    filterValue(): T;
    getRandom(min: number, max: number): number;
}
//# sourceMappingURL=baseFilter.d.ts.map
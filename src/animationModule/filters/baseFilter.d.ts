import IFilter from "./IFilter.js";
import Delay from "./delay.js";
export default class BaseFilter<T> implements IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    protected delay: Delay;
    protected _animatedValue: T | null;
    protected startValue: T;
    protected endValue: T;
    protected readonly delaySec: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: T, endValue: T, delaySec?: number);
    update(rTimeMs: number): boolean;
    protected isBeyond(rTimeMs: number): boolean;
    setBaseValue(bv: T): T;
    animatedValue(): T;
    getRandom(min: number, max: number): number;
}
//# sourceMappingURL=baseFilter.d.ts.map
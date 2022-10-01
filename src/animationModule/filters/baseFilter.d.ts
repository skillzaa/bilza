import IFilter from "./IFilter.js";
import Delay from "./delay.js";
export default class BaseFilter<T> implements IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    delay: Delay;
    protected startValue: T;
    protected _animatedValue: T | null;
    protected endValue: T;
    protected beyondValue: T;
    protected readonly delaySec: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: T, endValue: T, delaySec?: number);
    update(rTimeMs: number): boolean;
    protected isBeyond(rTimeMs: number): boolean;
    setBaseValue(bv: T): T;
    getBaseValue(): T;
    setBeyondValue(bv: T): T;
    getBeyondValue(): T;
    setEndValue(ev: T): T;
    getEndValue(): T;
    animatedValue(): T;
    getRandom(min: number, max: number): number;
}
//# sourceMappingURL=baseFilter.d.ts.map
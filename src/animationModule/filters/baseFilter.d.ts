import IFilter from "./IFilter.js";
export default class BaseFilter<T> implements IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    protected _animatedValue: T | null;
    protected baseValue: T;
    protected beyondValue: T;
    private readonly delayInMS;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: T, delayInMS?: number);
    update(rTimeMs: number): boolean;
    setBaseValue(bv: T): T;
    animatedValue(): T;
}
//# sourceMappingURL=baseFilter.d.ts.map
import BaseFilter from "./baseFilter.js";
export default class IdentityFil<T> extends BaseFilter<T> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: T, endValue: T, delaySec?: number);
    animatedValue(): T;
}
//# sourceMappingURL=jumpBetween-old.d.ts.map
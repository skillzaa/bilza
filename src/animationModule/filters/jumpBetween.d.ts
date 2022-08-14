import BaseFilter from "./baseFilter.js";
export default class IdentityFil<T> extends BaseFilter<T> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: T, delayInMS?: number);
    animatedValue(): T;
}
//# sourceMappingURL=jumpBetween.d.ts.map
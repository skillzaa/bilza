import BaseFilter from "./baseFilter.js";
export default class Identity<T> extends BaseFilter<T> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: T, delayInMS?: number);
    animatedValue(): T;
}
//# sourceMappingURL=identity.d.ts.map
import BaseFilter from "./baseFilter.js";
export default class ConstantVal<T> extends BaseFilter<T> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: T, delayInMS?: number);
    animatedValue(): T;
}
//# sourceMappingURL=constantVal.d.ts.map
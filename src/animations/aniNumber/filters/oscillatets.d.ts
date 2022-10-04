import BaseFilter from "../../filters/baseFilter.js";
export default class Oscillate extends BaseFilter<number> {
    incDecArray: BaseFilter<number>[];
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number, secPerIter?: number, stopAt?: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=oscillatets.d.ts.map
import BaseFilter from "../../filters/baseFilter.js";
import IFilter from "../../filters/IFilter.js";
export default class Oscillate extends BaseFilter<number> {
    incDecArray: IFilter<number>[];
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue?: number, endValue?: number, secPerIter?: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=oscillatets.d.ts.map
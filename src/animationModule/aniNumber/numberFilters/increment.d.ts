import BaseFilter from "../../filters/baseFilter.js";
export default class Increment extends BaseFilter<number> {
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, delayInMS: number | undefined, endValue: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=increment.d.ts.map
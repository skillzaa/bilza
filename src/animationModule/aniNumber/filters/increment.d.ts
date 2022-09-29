import BaseNumberFilter from "./baseNumberFilter.js";
export default class Increment extends BaseNumberFilter {
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number, delayInMS?: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=increment.d.ts.map
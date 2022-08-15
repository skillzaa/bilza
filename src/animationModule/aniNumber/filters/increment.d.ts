import BaseNumberFilter from "./baseNumberFilter.js";
export default class Increment extends BaseNumberFilter {
    protected endValue: number;
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, endValue: number, delayInMS?: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=increment.d.ts.map
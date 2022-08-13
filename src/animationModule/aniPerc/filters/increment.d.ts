import BasePercFilter from "./basePercFilter.js";
export default class Increment extends BasePercFilter {
    protected endValue: number;
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, delayInMS: number | undefined, endValue: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=increment.d.ts.map
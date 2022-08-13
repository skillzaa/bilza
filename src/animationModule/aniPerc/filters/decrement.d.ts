import BasePercFilter from "./basePercFilter.js";
export default class Decrement extends BasePercFilter {
    protected endValue: number;
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, delayInMS: number | undefined, endValue: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
}
//# sourceMappingURL=decrement.d.ts.map
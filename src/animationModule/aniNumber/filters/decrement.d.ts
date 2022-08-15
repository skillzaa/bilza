import BaseNumberFilter from "./baseNumberFilter.js";
export default class Decrement extends BaseNumberFilter {
    protected endValue: number;
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, endValue: number, delayInMS?: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
}
//# sourceMappingURL=decrement.d.ts.map
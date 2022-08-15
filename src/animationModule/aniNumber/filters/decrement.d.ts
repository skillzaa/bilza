import BaseNumberFilter from "./baseNumberFilter.js";
export default class Decrement extends BaseNumberFilter {
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number, delaySec?: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
}
//# sourceMappingURL=decrement.d.ts.map
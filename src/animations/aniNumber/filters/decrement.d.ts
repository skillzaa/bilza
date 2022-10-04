import BaseNumberFilter from "./baseNumberFilter.js";
export default class Decrement extends BaseNumberFilter {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number, delayInMS?: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
}
//# sourceMappingURL=decrement.d.ts.map
import BaseNumberFilter from "./baseNumberFilter.js";
export default class Decrement extends BaseNumberFilter {
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, delayInMS: number | undefined, endValue: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=decrement.d.ts.map
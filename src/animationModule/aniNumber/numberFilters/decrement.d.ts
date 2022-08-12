import BaseFilter from "./baseFilter.js.js";
export default class Decrement extends BaseFilter {
    protected startValue: number;
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: number, endValue: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
    qualifyToRun(rTimeMs: number): boolean;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=decrement.d.ts.map
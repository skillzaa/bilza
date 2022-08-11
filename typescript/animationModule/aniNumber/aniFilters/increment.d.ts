import BaseFilter from "../baseNumberFilter.js";
export default class Increment extends BaseFilter {
    protected startValue: number;
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(msDeltaStart: number, msDeltaEnd: number, startValue: number, endValue: number);
    update(msDelta: number): boolean;
    qualifyToRun(msDelta: number): boolean;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=increment.d.ts.map
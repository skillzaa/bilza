import BaseFilter from "../baseFilter.js";
export default class Increment extends BaseFilter {
    protected startValue: number;
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(msDeltaStart: number, msDeltaEnd: number, startValue: number, endValue: number);
    update(msDelta: number, baseGotoValue?: number): boolean;
    qualifyToRun(msDelta: number): boolean;
}
//# sourceMappingURL=increment.d.ts.map
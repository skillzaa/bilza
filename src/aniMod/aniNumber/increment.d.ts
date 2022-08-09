import BaseFilter from "../baseFilter.js";
export default class Increment extends BaseFilter {
    protected startValue: number;
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(msDeltaStart: number, msDeltaEnd: number, startValue: number, endValue: number);
    value(msDelta: number, baseGotoValue?: number): number | null;
    qualifyToRun(msDelta: number): boolean;
}
//# sourceMappingURL=increment.d.ts.map
import BaseFilter from "../baseFilter.js";
export default class Decrement extends BaseFilter {
    protected startValue: number;
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(msDeltaStart: number, msDeltaEnd: number, startValue: number, endValue: number);
    value(msDelta: number, baseGotoValue?: number): number | null;
    qualifyToRun(msDelta: number): boolean;
}
//# sourceMappingURL=decrement.d.ts.map
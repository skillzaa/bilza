import IFilter from "../IFilter.js";
export default class BaseFilter implements IFilter {
    protected _ret_val: number | null;
    protected msDeltaStart: number;
    protected msDeltaEnd: number;
    protected startValue: number;
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(msDeltaStart: number, msDeltaEnd: number, startValue: number, endValue: number);
    value(msDelta: number, baseGotoValue?: number): number | null;
    qualifyToRun(msDelta: number): boolean;
}
//# sourceMappingURL=baseFiltert.d.ts.map
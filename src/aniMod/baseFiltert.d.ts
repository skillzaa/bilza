import IFilter from "./IFilter.js";
export default class BaseFilter implements IFilter {
    protected _ret_val: number | null;
    protected msDeltaStart: number;
    protected msDeltaEnd: number;
    private delayInMS;
    private delayInMSCounter;
    constructor(msDeltaStart: number, msDeltaEnd: number, delayInMS?: number);
    value(msDelta: number, baseGotoValue?: number): number | null;
    qualifyToRun(msDelta: number): boolean;
    protected xFramesSkipped(msDelta: number): boolean;
}
//# sourceMappingURL=baseFiltert.d.ts.map
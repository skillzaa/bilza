import IFilter from "./IFilter.js";
export default class BaseFilter implements IFilter<number> {
    protected _ret_val: number | null;
    protected msDeltaStart: number;
    protected msDeltaEnd: number;
    private delayInMS;
    private delayInMSCounter;
    constructor(msDeltaStart: number, msDeltaEnd: number, delayInMS?: number);
    update(msDelta: number, baseGotoValue?: number): boolean;
    value(): number | null;
    qualifyToRun(msDelta: number): boolean;
    protected xFramesSkipped(msDelta: number): boolean;
}
//# sourceMappingURL=baseFilter.d.ts.map
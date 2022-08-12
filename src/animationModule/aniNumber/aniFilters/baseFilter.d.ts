import IAniFilter from "./IAniFilter.js";
export default class BaseFilter implements IAniFilter<number> {
    protected _ret_val: number | null;
    protected rTimeMsStart: number;
    protected rTimeMsEnd: number;
    private delayInMS;
    private delayInMSCounter;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, delayInMS?: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
    value(): number | null;
    qualifyToRun(rTimeMs: number): boolean;
    protected xFramesSkipped(rTimeMs: number): boolean;
    init(canvasWidthHeight: number): boolean;
    protected percToPix(canvasWidthHeight: number, perc: number): number;
}
//# sourceMappingURL=baseFilter.d.ts.map
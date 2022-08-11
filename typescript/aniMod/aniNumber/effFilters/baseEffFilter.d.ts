import IEffFilter from "./IEffFilter.js";
export default class BaseFilter implements IEffFilter<number> {
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
    init(canvasWidthHeight: number): boolean;
    protected percToPix(canvasWidthHeight: number, perc: number): number;
}
//# sourceMappingURL=baseEffFilter.d.ts.map
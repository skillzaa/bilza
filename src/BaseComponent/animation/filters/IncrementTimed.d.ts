import IFilter from "../aniNumber/IFilter";
export default class IncrementTimed implements IFilter {
    protected exhausted: boolean;
    protected _ret_val: number | null;
    protected startTime: number;
    protected endTime: number;
    protected startValue: number;
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    protected readonly SYSTEMMAXVALUE: number;
    protected readonly SYSTEMMINVALUE: number;
    constructor(startTime: number, endTime: number, startValue: number, endValue: number);
    update(msDelta: number): boolean;
    setExhausted(msDelta: number): boolean;
    isExhausted(): boolean;
    value(): number | null;
    protected getTimeLapsed(msDelta: number): number;
}
//# sourceMappingURL=IncrementTimed.d.ts.map
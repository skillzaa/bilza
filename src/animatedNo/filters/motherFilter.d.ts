export default class Motherfilter {
    protected active: boolean;
    protected exhausted: boolean;
    protected _ret_val: number | null;
    protected FROM: number;
    protected TO: number;
    protected ENDVALUE: number;
    protected TOTALFRAMES: number;
    protected framesCounter: number;
    protected ADDFACTOR: number;
    protected readonly SYSTEMMAXVALUE: number;
    protected readonly SYSTEMMINVALUE: number;
    protected TIMEDIFFSEC: number;
    protected XDIFF: number;
    protected STARTVALUE: number;
    constructor();
    setActive(msDelta: number): boolean;
    isActive(): boolean;
    setExhausted(msDelta: number): boolean;
    isExhausted(): boolean;
    value(): number | null;
    protected getTimeLapsed(msDelta: number): number;
    protected getXDiff(startValue: number, endValue: number): number;
}
//# sourceMappingURL=motherFilter.d.ts.map
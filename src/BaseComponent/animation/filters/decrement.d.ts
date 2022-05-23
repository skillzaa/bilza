export default class Increment {
    private readonly FROM;
    private readonly TO;
    private readonly STARTVALUE;
    private readonly ENDVALUE;
    private readonly TOTALFRAMES;
    private framesCounter;
    private ADDFACTOR;
    private active;
    private readonly SYSTEMMAXVALUE;
    private readonly SYSTEMMINVALUE;
    private readonly TIMEDIFFSEC;
    private readonly XDIFF;
    private _ret_val;
    constructor(from: number, to: number, startValue: number, endValue: number);
    update(msDelta: number): boolean;
    value(): number | null;
    private getTimeLapsed;
    private getFrom;
    private getTo;
    private getEndValue;
    private getXDiff;
}
//# sourceMappingURL=decrement.d.ts.map
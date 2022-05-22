export default class Increment {
    private readonly FROM;
    private readonly TO;
    private readonly STARTVALUE;
    private readonly ENDVALUE;
    private readonly DELAYFACTOR;
    private delayCounter;
    private readonly SYSTEMMAXENDVALUE;
    private readonly SYSTEMMINSTARTVALUE;
    private readonly TIMEDIFF;
    private readonly XDIFF;
    private _ret_val;
    constructor(from: number, to: number, startValue: number, endValue: number);
    update(msDelta: number): boolean;
    value(): number | null;
    private getTimeLapsed;
    private getFrom;
    private getTo;
    private getEndValue;
    private getDelayFactor;
    private getXDiff;
}
//# sourceMappingURL=incrementTimeBased.d.ts.map
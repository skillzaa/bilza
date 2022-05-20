export default class Decrement {
    private readonly FROM;
    private readonly TO;
    private readonly STARTVALUE;
    private readonly ENDVALUE;
    private readonly timeDiff;
    private readonly xDiff;
    private val;
    constructor(from: number, to: number, startValue: number, endValue: number);
    update(msDelta: number): boolean;
    value(): number | null;
    private getTimeLapsed;
}
//# sourceMappingURL=decrement.d.ts.map
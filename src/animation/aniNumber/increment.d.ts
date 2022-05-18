export default class Increment {
    from: number;
    to: number;
    private startValue;
    private endValue;
    private readonly DELAYCOUNTER;
    private lastMsDelta;
    private val;
    constructor(from: number, to: number, startValue: number, endValue: number);
    update(msDelta: number): boolean;
    value(): number;
}
//# sourceMappingURL=increment.d.ts.map
export default class AniNumber {
    private animations;
    private val;
    private readonly INITALVALUE;
    constructor(initalValue: number);
    update(msDelta: number): void;
    value(): number;
    increment(from?: number, to?: number, startValue?: number, endValue?: number): void;
    setValue(n: number): number;
}
//# sourceMappingURL=aniNumber.d.ts.map
export default class AniNumber {
    private _value;
    private preInitIncDec;
    private gotoArray;
    private filters;
    constructor(defaultValue?: number);
    update(msDelta: number): boolean;
    value(): number;
    private runGoto;
    set(n: number): number;
    animate(from: number, to: number, startValue: number, endValue: number): void;
    vibrate(from: number, to: number, seed?: number, offset?: number, delay?: number): void;
    private runFilters;
}
//# sourceMappingURL=aniNumber.d.ts.map
export default class AniNumber {
    private _value;
    private gotoArray;
    private filters;
    readonly defaultValue: number;
    readonly minValue: number;
    readonly maxValue: number;
    constructor(initialValue?: number, minValue?: number, maxValue?: number);
    value(msDelta: number): number;
    private runFilters;
    private getBaseGotoValue;
    set(n: number): number;
    goto(msDelta: number, value?: number): void;
    animate(msDeltaStart: number, msDeltaEnd: number, startValue: number, endValue: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
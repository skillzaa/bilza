export default class AniNumber {
    private _value;
    private gotoArray;
    readonly defaultValue: number;
    readonly minValue: number;
    readonly maxValue: number;
    constructor(initialValue?: number, minValue?: number, maxValue?: number);
    value(msDelta: number): number;
    private getBaseGotoValue;
    set(n: number): number;
    goto(frame: number, value?: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map
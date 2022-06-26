export default class AniNumber {
    private _value;
    private filters;
    constructor(defaultValue?: number);
    update(msDelta: number): boolean;
    value(): number;
    set(n: number): number;
    _animate(from: number, to: number, startValue: number, endValue: number): void;
    _vibrate(from: number, to: number, seed?: number, offset?: number, delay?: number): void;
    _jumpBetween(startTimeSec: number, endTimeSec: number, pointOne?: number, pointTwo?: number, everyXFrame?: number): void;
    _random(startTimeSec: number, endTimeSec: number, min?: number, max?: number, everyXFrame?: number): void;
    _goto(startTimeSec: number, theValue?: number): void;
    private runFilters;
}
//# sourceMappingURL=aniNumber.d.ts.map
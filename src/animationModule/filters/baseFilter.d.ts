export default class BaseFilter<T> {
    msDeltaStart: number;
    msDeltaEnd: number;
    baseValue: T;
    private delayInMS;
    private delayInMSCounter;
    protected _animatedValue: T | null;
    constructor(msDeltaStart: number, msDeltaEnd: number, baseValue: T, delayInMS?: number);
    update(msDelta: number): boolean;
    animatedValue(msDelta: number): T;
}
//# sourceMappingURL=baseFilter.d.ts.map
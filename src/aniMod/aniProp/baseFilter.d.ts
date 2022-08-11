export default class BaseFilter<T> {
    private _animatedValue;
    msDeltaStart: number;
    msDeltaEnd: number;
    private delayInMS;
    private delayInMSCounter;
    private incommingData;
    constructor(msDeltaStart: number, msDeltaEnd: number, delayInMS?: number, incommingData?: never[]);
    update(msDelta: number, baseValue: T): boolean;
    animatedValue(): T | null;
}
//# sourceMappingURL=baseFilter.d.ts.map
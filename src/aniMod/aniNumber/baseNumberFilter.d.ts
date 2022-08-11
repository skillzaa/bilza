import IAniFilter from "../aniProp/filters/IFilter.js.js.js";
export default class BaseFilter implements IAniFilter<number> {
    private _animatedValue;
    msDeltaStart: number;
    msDeltaEnd: number;
    private delayInMS;
    private delayInMSCounter;
    private incommingData;
    constructor(msDeltaStart: number, msDeltaEnd: number, delayInMS?: number, incommingData?: never[]);
    update(msDelta: number, baseValue?: number): boolean;
    init(canvasWidthHeight: number): boolean;
    protected percToPix(canvasWidthHeight: number, perc: number): number;
    animatedValue(): number | null;
}
//# sourceMappingURL=baseNumberFilter.d.ts.map
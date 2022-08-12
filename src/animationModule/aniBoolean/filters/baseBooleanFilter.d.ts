import BaseFilter from "../../filters/baseFilter.js";
export default class BaseBooleanFilter extends BaseFilter<boolean> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: boolean, delayInMS?: number);
    init(canvasWidthHeight: number): boolean;
    percToPix(perc: number, canvasWidthHeight: number): number;
}
//# sourceMappingURL=baseBooleanFilter.d.ts.map
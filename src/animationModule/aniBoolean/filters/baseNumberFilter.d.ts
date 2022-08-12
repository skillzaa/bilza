import BaseFilter from "../../filters/baseFilter.js";
export default class BaseNumberFilter extends BaseFilter<number> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, delayInMS?: number);
    init(canvasWidthHeight: number): boolean;
    percToPix(perc: number, canvasWidthHeight: number): number;
}
//# sourceMappingURL=baseNumberFilter.d.ts.map
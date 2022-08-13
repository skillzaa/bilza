import BaseFilter from "../../filters/baseFilter.js";
import IPercFilter from "./IPercFilter.js";
export default class BasePercFilter extends BaseFilter<number> implements IPercFilter<number> {
    responsive: boolean;
    protected heightWidth: number | null;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, delayInMS?: number);
    init(canvasWidthHeight: number): boolean;
    responsiveValue(perc: number): number;
    percToPix(perc: number): number;
}
//# sourceMappingURL=basePercFilter.d.ts.map
import BaseFilter from "../../filters/baseFilter.js";
export default class BaseStringFilter extends BaseFilter<string> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: string, delayInMS?: number);
    init(canvasWidthHeight: number): boolean;
    percToPix(perc: number, canvasWidthHeight: number): number;
}
//# sourceMappingURL=baseStringFilter.d.ts.map
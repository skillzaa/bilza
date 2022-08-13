import BasePercFilter from "./basePercFilter.js";
export default class ConstantPercVal extends BasePercFilter {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, delayInMS?: number);
    init(canvasWidthHeight: number): boolean;
    animatedValue(): number;
}
//# sourceMappingURL=constantPercVal.d.ts.map
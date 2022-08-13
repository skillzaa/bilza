import BaseFilter from "../../filters/baseFilter.js";
export default class ConstantVal extends BaseFilter<number> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, baseValue: number, delayInMS?: number);
    init(canvasWidthHeight: number): boolean;
    animatedValue(): number;
}
//# sourceMappingURL=constantVal.d.ts.map
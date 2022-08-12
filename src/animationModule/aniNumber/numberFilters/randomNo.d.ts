import BaseFilter from "./baseFilter.js.js";
export default class RandomNo extends BaseFilter {
    private min;
    private max;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, min?: number, max?: number, delayInMS?: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=randomNo.d.ts.map
import BaseFilter from "./baseFilter.js.js";
export default class Oscillate extends BaseFilter {
    private startValue;
    private endValue;
    private speed;
    private addSub;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue?: number, endValue?: number, speed?: number, delayInMS?: number);
    update(rTimeMs: number, baseGotoValue?: number): boolean;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=oscillate.d.ts.map
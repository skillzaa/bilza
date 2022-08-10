import BaseFilter from "./baseFilter.js";
export default class Oscillate extends BaseFilter {
    private startValue;
    private endValue;
    private speed;
    private addSub;
    constructor(msDeltaStart: number, msDeltaEnd: number, startValue?: number, endValue?: number, speed?: number, delayInMS?: number);
    update(msDelta: number, baseGotoValue?: number): boolean;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=oscillate.d.ts.map
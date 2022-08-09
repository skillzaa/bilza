import BaseFilter from "../baseFilter.js";
export default class Oscillate extends BaseFilter {
    private startValue;
    private endValue;
    private speed;
    private addSub;
    constructor(msDeltaStart: number, msDeltaEnd: number, startValue?: number, endValue?: number, speed?: number, delayInMS?: number);
    value(msDelta: number, baseGotoValue?: number): number | null;
}
//# sourceMappingURL=oscillate.d.ts.map
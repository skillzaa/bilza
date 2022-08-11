import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class Oscillate extends BaseFilter<number> {
    private startValue;
    private endValue;
    private speed;
    private addSub;
    constructor(startTimeSec: number, endTimeSec: number, startValue?: number, endValue?: number, speed?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=oscillate.d.ts.map
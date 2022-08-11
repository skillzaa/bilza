import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class RandomNo extends BaseFilter<number> {
    private min;
    private max;
    private everyXFrame;
    private delayCounter;
    constructor(startTimeSec: number, endTimeSec: number, min?: number, max?: number, everyXFrame?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=randomNo.d.ts.map
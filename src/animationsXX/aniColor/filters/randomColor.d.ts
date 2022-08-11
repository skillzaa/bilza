import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class RandomColor extends BaseFilter<string> {
    private everyXFrame;
    private delayCounter;
    constructor(startTimeSec: number, endTimeSec: number, everyXFrame?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=randomColor.d.ts.map
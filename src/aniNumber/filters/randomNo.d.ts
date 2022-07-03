import { FilterState } from "../../design/filterState.js";
import BaseFilter from "./baseFilter.js";
export default class RandomNo extends BaseFilter {
    private min;
    private max;
    private everyXFrame;
    private delayCounter;
    constructor(startTimeSec: number, endTimeSec: number, min?: number, max?: number, everyXFrame?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=randomNo.d.ts.map
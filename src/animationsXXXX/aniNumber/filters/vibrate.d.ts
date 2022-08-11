import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class Vibrate extends BaseFilter<number> {
    private offset;
    private seed;
    private delay;
    private delayCounter;
    constructor(startTimeSec: number, endTimeSec: number, seed?: number, offset?: number, delay?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=vibrate.d.ts.map
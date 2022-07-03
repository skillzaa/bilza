import { FilterState } from "../../design/filterState.js";
import BaseFilter from "./baseFilter.js";
export default class Vibrate extends BaseFilter {
    private offset;
    private seed;
    private delay;
    private delayCounter;
    constructor(startTimeSec: number, endTimeSec: number, seed?: number, offset?: number, delay?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=vibrate.d.ts.map
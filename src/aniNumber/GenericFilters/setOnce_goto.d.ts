import { FilterState } from "../filterState.js";
import BaseFilter from "../filters/baseFilter.js";
export default class SetOnce<T> extends BaseFilter {
    private theValue;
    private usedOnce;
    constructor(startTimeSec: number, theValue: T);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=setOnce_goto.d.ts.map
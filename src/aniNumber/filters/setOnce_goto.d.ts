import { FilterState } from "../filterState.js";
import BaseFilter from "./baseFilter.js";
export default class SetOnce extends BaseFilter {
    private theValue;
    private usedOnce;
    constructor(startTimeSec: number, theValue?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=setOnce_goto.d.ts.map
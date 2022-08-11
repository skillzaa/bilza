import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class SetOnce extends BaseFilter<number> {
    private theValue;
    private usedOnce;
    constructor(startTimeSec: number, theValue?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=setOnce_goto.d.ts.map
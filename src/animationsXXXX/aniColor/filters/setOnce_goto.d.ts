import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class SetOnce extends BaseFilter<string> {
    private theValue;
    private usedOnce;
    constructor(startTimeSec: number, theValue: string);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=setOnce_goto.d.ts.map
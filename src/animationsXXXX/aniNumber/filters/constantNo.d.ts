import { FilterState } from "../../animationDesign/filterState.js";
import BaseFilter from "../../animationDesign/baseFilter.js";
export default class ConstantNo extends BaseFilter<number> {
    constantValue: number;
    constructor(startTimeSec: number, endTimeSec: number, constantValue: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=constantNo.d.ts.map
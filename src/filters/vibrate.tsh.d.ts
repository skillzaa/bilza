import { FilterState } from "../design/filterState.js";
import BaseFilter from "./baseFilter.js";
export default class ConstantNo extends BaseFilter {
    constantValue: number;
    constructor(startTimeSec: number, endTimeSec: number, constantValue: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=vibrate.tsh.d.ts.map
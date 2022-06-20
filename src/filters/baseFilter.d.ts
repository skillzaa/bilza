import IFilter from "../design/IFilter.js";
import { FilterState } from "../design/filterState.js";
export default class BaseFilter implements IFilter {
    protected _ret_val: number | null;
    protected filterState: FilterState;
    protected startTime: number;
    protected endTime: number;
    constructor(startTimeSec: number, endTimeSec: number);
    update(msDelta: number): FilterState;
    protected setState(msDelta: number): FilterState;
    value(): number | null;
}
//# sourceMappingURL=baseFilter.d.ts.map
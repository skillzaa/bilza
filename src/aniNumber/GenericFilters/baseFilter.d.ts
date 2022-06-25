import IFilter from "../IFilter.js";
import { FilterState } from "../filterState.js";
export default class BaseFilter<T> implements IFilter {
    protected _ret_val: T | null;
    protected filterState: FilterState;
    protected startTime: number;
    protected endTime: number;
    constructor(startTimeSec: number, endTimeSec: number);
    update(msDelta: number): FilterState;
    protected setState(msDelta: number): FilterState;
    value(): T | null;
}
//# sourceMappingURL=baseFilter.d.ts.map
import { FilterState } from "./filterState.js";
import IFilter from "./IFilter.js";
export default class BaseFilter<T> implements IFilter<T> {
    protected _ret_val: T | null;
    protected filterState: FilterState;
    protected startTime: number;
    protected endTime: number;
    private skipXframes;
    private skipframesCounter;
    constructor(startTimeSec: number, endTimeSec: number, skipXframes?: number);
    update(msDelta: number): FilterState;
    value(): T | null;
    protected okToGo(): boolean;
    protected xFramesSkipped(): boolean;
    protected isRunning(): boolean;
}
//# sourceMappingURL=baseFilter.d.ts.map
import IFilter from "../../animationDesign/IFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class Decrement implements IFilter<number> {
    protected _ret_val: number | null;
    protected filterState: FilterState;
    protected startTime: number;
    protected endTime: number;
    protected startValue: number;
    protected endValue: number;
    protected Xdiff: number;
    protected timeDiff: number;
    constructor(startTimeSec: number, endTimeSec: number, startValue: number, endValue: number);
    update(msDelta: number): FilterState;
    protected setState(msDelta: number): FilterState;
    value(): number | null;
}
//# sourceMappingURL=decrement.d.ts.map
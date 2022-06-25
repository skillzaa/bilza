import { FilterState } from "./filterState.js";
import BaseFilter from "./baseFilter.js";
export default class ConstantNo extends BaseFilter {
    constructor(startTimeSec, endTimeSec, constantValue) {
        super(startTimeSec, endTimeSec);
        this.constantValue = constantValue;
        this._ret_val = null;
    }
    update(msDelta) {
        super.update(msDelta);
        if (this.filterState == FilterState.Running) {
            this._ret_val = this.constantValue;
        }
        else {
            this._ret_val = null;
        }
        return this.filterState;
    }
}

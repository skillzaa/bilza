import { FilterState } from "../../animationDesign/filterState.js";
import BaseFilter from "../../animationDesign/baseFilter.js";
export default class ConstantNo extends BaseFilter {
    constructor(startTimeSec, endTimeSec, constantValue) {
        super(startTimeSec, endTimeSec);
        this.constantValue = constantValue;
        this._ret_val = null;
    }
    update(msDelta) {
        if (this.update(msDelta) == FilterState.Running) {
            this._ret_val = this.constantValue;
        }
        else {
            this._ret_val = null;
        }
        return this.filterState;
    }
}

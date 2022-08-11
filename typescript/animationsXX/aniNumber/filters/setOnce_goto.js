import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class SetOnce extends BaseFilter {
    constructor(startTimeSec, theValue = 10) {
        super(startTimeSec, startTimeSec + 3000);
        this.theValue = theValue;
        this.usedOnce = false;
        this._ret_val = null;
    }
    update(msDelta) {
        super.update(msDelta);
        if ((this.filterState == FilterState.Running) && (this.usedOnce == false)) {
            this._ret_val = this.theValue;
            this.usedOnce = true;
        }
        else {
            this._ret_val = null;
        }
        return this.filterState;
    }
}

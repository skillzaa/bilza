import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class Oscillate extends BaseFilter {
    constructor(startTimeSec, endTimeSec, startValue = 1, endValue = 10, speed = 1) {
        super(startTimeSec, endTimeSec);
        this.startValue = startValue;
        this.endValue = endValue;
        this.addSub = true;
        this.speed = speed;
        this._ret_val = null;
    }
    update(msDelta) {
        super.update(msDelta);
        if (this.filterState == FilterState.Running) {
            if (this._ret_val == null) {
                this._ret_val = this.startValue;
                return this.filterState;
            }
            if (this._ret_val < this.startValue) {
                this.addSub = true;
            }
            else if (this._ret_val > this.endValue) {
                this.addSub = false;
            }
            if (this.addSub == true) {
                this._ret_val += this.speed;
            }
            else {
                this._ret_val -= this.speed;
            }
        }
        return this.filterState;
    }
}

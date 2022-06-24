import { FilterState } from "../design/filterState.js";
import BaseFilter from "./baseFilter.js";
export default class RandomNo extends BaseFilter {
    constructor(startTimeSec, endTimeSec, min = 1, max = 10, everyXFrame = 0) {
        super(startTimeSec, endTimeSec);
        this.min = min;
        this.max = max;
        this.everyXFrame = everyXFrame;
        this.delayCounter = 0;
        this._ret_val = null;
    }
    update(msDelta) {
        super.update(msDelta);
        if (this.filterState == FilterState.Running) {
            if (this.delayCounter >= this.everyXFrame) {
                this.delayCounter = 0;
                this._ret_val = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            }
            else {
                this.delayCounter += 1;
            }
        }
        else {
            this._ret_val = null;
        }
        return this.filterState;
    }
}

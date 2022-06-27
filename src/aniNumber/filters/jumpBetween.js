import { FilterState } from "../filterState.js";
import BaseFilter from "./baseFilter.js";
export default class JumpBetween extends BaseFilter {
    constructor(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, skipFrames = 0) {
        super(startTimeSec, endTimeSec);
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
        this.skipFrames = skipFrames;
        this.delayCounter = 0;
        this._ret_val = null;
    }
    update(msDelta) {
        super.update(msDelta);
        if (this.filterState == FilterState.Running) {
            if (this.delayCounter >= this.skipFrames) {
                this.delayCounter = 0;
                if (this._ret_val !== this.pointOne) {
                    this._ret_val = this.pointOne;
                }
                else {
                    this._ret_val = this.pointTwo;
                }
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

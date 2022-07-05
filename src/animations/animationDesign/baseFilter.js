import { FilterState } from "./filterState.js";
export default class BaseFilter {
    constructor(startTimeSec, endTimeSec, skipXframes = 0) {
        if (startTimeSec < 0 || endTimeSec < 0) {
            throw new Error("time can not be negative");
        }
        if (endTimeSec <= startTimeSec) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        this.skipXframes = skipXframes;
        this.skipframesCounter = 0;
        this.startTime = startTimeSec * 1000;
        this.endTime = endTimeSec * 1000;
        this._ret_val = null;
        this.filterState = FilterState.Waiting;
    }
    update(msDelta) {
        if (msDelta < this.startTime) {
            this.filterState = FilterState.Waiting;
        }
        else if (msDelta >= this.startTime && msDelta <= this.endTime) {
            this.filterState = FilterState.Running;
        }
        else if (msDelta > this.endTime) {
            this.filterState = FilterState.Exhausted;
        }
        return this.filterState;
    }
    value() {
        return this._ret_val;
    }
    okToGo() {
        if ((this.filterState == FilterState.Running)) {
            if (this.skipframesCounter < this.skipXframes) {
                this.skipframesCounter += 1;
                return false;
            }
            else {
                this.skipframesCounter = 0;
                return true;
            }
        }
        else {
            return false;
        }
    }
    xFramesSkipped() {
        if (this.skipframesCounter < this.skipXframes) {
            this.skipframesCounter += 1;
            return false;
        }
        else {
            this.skipframesCounter = 0;
            return true;
        }
    }
    isRunning() {
        if ((this.filterState == FilterState.Running)) {
            return true;
        }
        else {
            return false;
        }
    }
}

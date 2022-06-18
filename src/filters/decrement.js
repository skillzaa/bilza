import { FilterState } from "../design/filterState.js";
export default class Decrement {
    constructor(startTimeSec, endTimeSec, startValue, endValue) {
        if (endTimeSec <= startTimeSec) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        this.startTime = startTimeSec * 1000;
        this.endTime = endTimeSec * 1000;
        this.startValue = startValue;
        this.endValue = endValue;
        this.timeDiff = Math.abs(this.endTime - this.startTime);
        this.Xdiff = Math.abs(this.startValue - this.endValue);
        this._ret_val = null;
        this.filterState = FilterState.Waiting;
    }
    update(msDelta) {
        this.setState(msDelta);
        if (this.filterState == FilterState.Running) {
            const timeLapsed = Math.ceil(msDelta - this.startTime);
            const timeLapPercent = (timeLapsed / (this.timeDiff * 1000)) * 100;
            this._ret_val = (this.Xdiff / 100) * timeLapPercent;
        }
        else {
            this._ret_val = null;
        }
        return this.filterState;
    }
    setState(msDelta) {
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
}

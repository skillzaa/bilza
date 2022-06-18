import { FilterState } from "../design/filterState.js";
export default class Increment {
    constructor(startTimeSec, endTimeSec, startValue, endValue) {
        if (startTimeSec < 0 || endTimeSec < 0) {
            throw new Error("time can not be negative");
        }
        if (endTimeSec <= startTimeSec) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        if (startValue >= endValue) {
            throw new Error("start value can not be equal to or larger than end value in an increment operation");
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
            const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
            const distanceLapsed = (this.Xdiff / 100) * timeLapPercent;
            this._ret_val = this.startValue + distanceLapsed;
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

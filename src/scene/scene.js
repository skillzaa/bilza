export default class Scene {
    constructor(startTime, endTime) {
        this.comps = [];
        this._startTime = startTime;
        this._endTime = endTime;
        this._duration = this._endTime - this._startTime;
        if (this._duration < 1) {
            throw new Error("start time can not be smaller than end time");
        }
    }
    getComps() {
        return this.comps;
    }
    getStartTime() {
        return this._startTime;
    }
    getEndTime() {
        return this._endTime;
    }
    duration() {
        return this._duration;
    }
    add(comp, startTimePlusInSec = 0, endTimeMinusInSec = 0) {
        const startTimeSec = this.startTimePlus(startTimePlusInSec);
        const endTimeSec = this.endTimeMinus(endTimeMinusInSec);
        comp.setTimings(startTimeSec, endTimeSec);
        this.comps.push(comp);
    }
    startTimePlus(timeSec = 0) {
        const startTimeSec = this._startTime + timeSec;
        if (startTimeSec > (this.getEndTime() - 1)) {
            throw new Error(`components start and end time should be with in the start and end time of the scene (which in this case is ${this.getStartTime()} and ${this.getEndTime()}`);
        }
        return startTimeSec;
    }
    endTimeMinus(timeSec = 0) {
        const endTimeSec = Math.abs(this._endTime - timeSec);
        if (endTimeSec > (this.getEndTime())) {
            throw new Error(`components start and end time should be with in the start and end time of the scene (which in this case is ${this.getStartTime()} and ${this.getEndTime()}`);
        }
        return endTimeSec;
    }
}

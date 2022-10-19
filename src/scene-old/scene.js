import CompFactory from "../facade/coreCompsFactory.js";
export default class Scene {
    constructor(startTime, endTime) {
        this.comps = [];
        this._startTime = startTime;
        this._endTime = endTime;
        this._duration = this._endTime - this._startTime;
        if (this._duration < 1) {
            throw new Error("start time can not be smaller than end time");
        }
        if (this._duration <= 2) {
            console.error("Scene duration is set too small may cause problems while inserting components");
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
    add(startTime = 0, endTime = 0) {
        const cf = new CompFactory(startTime, endTime, "add", this.insert.bind(this));
        return cf;
    }
    insert(comp, startTime, endTime, actionType) {
        this.setCompTimings(comp, startTime, endTime);
        this.comps.push(comp);
        return comp;
    }
    setCompTimings(comp, startTimePlusInSec = 0, endTimeMinusInSec = 0) {
        this.minDurationViolation(comp, startTimePlusInSec, endTimeMinusInSec);
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
        const endTimeSec = this._endTime - timeSec;
        if (endTimeSec <= 0) {
            throw new Error("Negative end time");
        }
        if (endTimeSec > (this.getEndTime())) {
            throw new Error(`components start and end time should be with in the start and end time of the scene (which in this case is ${this.getStartTime()} and ${this.getEndTime()}`);
        }
        if (endTimeSec <= this._startTime) {
            throw new Error("scene minimum width violation");
        }
        return endTimeSec;
    }
    minDurationViolation(comp, startTimePlusInSec, endTimeMinusInSec) {
        const minReq = endTimeMinusInSec + startTimePlusInSec;
        if (minReq >= (this._duration)) {
            throw new Error(`Scene minimum duration violated by component id:${comp.id}. The scene minimum duration may be more than you have given it`);
        }
    }
}

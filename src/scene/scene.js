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
        this.init();
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
    init() {
    }
    push(comp, startTimeSec, endTimeSec) {
        if (startTimeSec < this.getStartTime() ||
            endTimeSec > this.getEndTime()) {
            throw new Error(`components start and end time should be with in 0 and scene duration (which in this case is ${this._duration}`);
        }
        comp.setDuration(startTimeSec, endTimeSec);
        this.comps.push(comp);
    }
    startTimePlus(timeSec) {
        return this._startTime + timeSec;
    }
    endTimeMinus(timeSec) {
        return Math.abs(this._endTime - timeSec);
    }
}

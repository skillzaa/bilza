export default class Scene {
    constructor(durationSec) {
        this._duration = durationSec;
        this.comps = [];
    }
    getComps() {
        this.init();
        return this.comps;
    }
    duration() {
        return this._duration;
    }
    init() {
    }
    push(comp, startTimeSec, endTimeSec) {
        if (startTimeSec > this._duration ||
            endTimeSec > this._duration) {
            throw new Error(`components start and end time should be with in 0 and scene duration (which in this case is ${this._duration} )`);
        }
        comp.setDuration(startTimeSec, endTimeSec);
        this.comps.push(comp);
    }
}

export default class Insert {
    constructor(comps) {
        this.comps = comps;
        this._pvt_duration_val = 0;
    }
    len(inMilliSeconds = true) {
        if (inMilliSeconds) {
            return (this._pvt_duration_val * 1000);
        }
        else {
            return (this._pvt_duration_val);
        }
    }
    extend(n) {
        this._pvt_duration_val += n;
        return this._pvt_duration_val;
    }
    append(comp, duration) {
        if (duration < 1) {
            throw new Error("for Insert operation to succeed you need component duration greater than 0");
        }
        else {
            comp.duration = duration;
        }
        comp.setStartTime(this.len(false));
        this.extend(comp.duration);
        return this.comps.push(comp);
    }
    insert(comp, startTime, duration) {
        if (duration < 1) {
            throw new Error("for Insert operation to succeed you need component duration greater than 0");
        }
        else {
            comp.duration = duration;
        }
        comp.setStartTime(startTime);
        if (comp.getStartTime(false) > this.len(false)) {
            throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${comp.getStartTime()} where as the end time of current video at this time is ${this.len()} , this creates a blank space of ${Math.ceil(comp.getStartTime() - this.len())} seconds.`);
        }
        if (comp.getEndTime(false) > this.len()) {
        }
        else {
            let overlap = comp.getEndTime(false) - this.len(false);
            this.extend(overlap);
        }
        return this.comps.push(comp);
    }
    alwaysOn(comp) {
        comp.insertType = comp.insertTypeOptions.AlwaysOn;
        return this.comps.push(comp);
    }
}

export default class Duration {
    constructor() {
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
    adjectWhileInsert(comp) {
        let r = false;
        switch (comp.insertType) {
            case comp.insertTypeOptions.AlwaysOn:
                r = true;
                break;
            case comp.insertTypeOptions.Append:
                if (comp.duration() < 1) {
                    throw new Error("for Insert operation to succeed you need component duration greater than 0");
                }
                comp.setStartTime(this.len(false));
                this.extend(comp.duration());
                r = true;
                break;
            case comp.insertTypeOptions.Insert:
                if (comp.getStartTime(false) > this.len()) {
                    throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${comp.getStartTime()} where as the end time of current video at this time is ${this.len()} , this creates a blank space of ${Math.ceil(comp.getStartTime() - this.len())} seconds.`);
                }
                if (comp.getEndTime(false) <= this.len()) {
                    r = true;
                }
                else {
                    let overlap = comp.getEndTime(false) - this.len();
                    this.extend(overlap);
                    r = true;
                }
                break;
            default:
                break;
        }
        return r;
    }
}

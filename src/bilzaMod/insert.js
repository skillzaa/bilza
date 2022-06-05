export default class Insert {
    constructor(comps, duration, charsWidth) {
        this.comps = comps;
        this.duration = duration;
        this.charsWidth = charsWidth;
    }
    append(comp, duration) {
        comp.charsWidth = this.charsWidth;
        if (duration < 1 || (typeof duration == "undefined")) {
            throw new Error("for Insert operation to succeed you need component duration greater than 0");
        }
        else {
            comp.duration = duration;
        }
        comp.setStartTime(this.duration.len(false));
        this.duration.extend(comp.duration);
        return this.comps.push(comp);
    }
    add(comp, startTime, duration) {
        comp.charsWidth = this.charsWidth;
        if ((duration < 1) || (typeof duration == "undefined")) {
            throw new Error("for Insert operation to succeed you need component duration greater than 0");
        }
        else {
            comp.duration = duration;
        }
        comp.setStartTime(startTime);
        if (comp.getStartTime(false) > this.duration.len(false)) {
            throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${comp.getStartTime()} where as the end time of current video at this time is ${this.duration.len()} , this creates a blank space of ${Math.ceil(comp.getStartTime() - this.duration.len())} seconds.`);
        }
        if (comp.getEndTime(false) > this.duration.len()) {
        }
        else {
            let overlap = comp.getEndTime(false) - this.duration.len(false);
            this.duration.extend(overlap);
        }
        return this.comps.push(comp);
    }
    alwaysOn(comp) {
        comp.charsWidth = this.charsWidth;
        comp.alwaysOn = true;
        return this.comps.push(comp);
    }
}

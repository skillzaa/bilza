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
            throw new Error("for Add operation to succeed you need component duration greater than 0");
        }
        else {
            comp.duration = duration;
        }
        comp.setStartTime(startTime);
        if (comp.getStartTime(false) > this.duration.len(false)) {
            this.duration.set(comp.getStartTime(false));
        }
        if (comp.getEndTime(false) > this.duration.len(false)) {
            let overlap = comp.getEndTime(false) - this.duration.len(false);
            this.duration.extend(overlap);
        }
        else {
        }
        return this.comps.push(comp);
    }
    alwaysOn(comp) {
        comp.charsWidth = this.charsWidth;
        comp.alwaysOn = true;
        return this.comps.push(comp);
    }
}

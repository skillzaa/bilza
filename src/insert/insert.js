import Duration from "./duration.js";
export default class Insert {
    constructor() {
        this.duration = new Duration();
    }
    add(comp) {
        if (comp.time == null) {
            throw new Error("Time object = null");
        }
        if (comp.time.getStart(false) > this.duration.len(false)) {
            this.duration.set(comp.time.getStart(true));
        }
        if (comp.time.getEnd(false) > this.duration.len(false)) {
            let overlap = comp.time.getEnd(true) - this.duration.len(true);
            this.duration.extend(overlap);
        }
    }
    getDuration(inSec = true) {
        return this.duration.len(inSec);
    }
}

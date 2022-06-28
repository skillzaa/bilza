import BaseComponentBase from "./99BaseComponentBase.js";
export default class TimeObj extends BaseComponentBase {
    constructor() {
        super();
        this.duration = 0;
        this.insertTimeInVid = 0;
    }
    getEndTime(inMilliSec = true) {
        let r = this.insertTimeInVid + this.duration;
        return inMilliSec ? (r * 1000) : r;
    }
    getStartTime(inMilliSec = true) {
        return inMilliSec ? (this.insertTimeInVid * 1000) : this.insertTimeInVid;
    }
    setStartTime(n) {
        this.insertTimeInVid = n;
        return this.insertTimeInVid;
    }
}

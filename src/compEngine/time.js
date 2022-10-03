export default class Time {
    constructor(startTime, endTime) {
        this.set(startTime, endTime);
        this.startTime = startTime;
        this.endTime = endTime;
    }
    set(startTime, endTime) {
        const dur = endTime - startTime;
        if ((dur < 1) || (typeof dur == "undefined")) {
            throw new Error("please make sure that start time is smaller than end time, also the duration may be too short");
        }
        this.startTime = startTime;
        this.endTime = endTime;
        return dur;
    }
    getDuration() {
        const dur = this.endTime - this.startTime;
        if ((dur < 1) || (typeof dur == "undefined")) {
            throw new Error("please make sure that start time is smaller than end time, also the duration may be too short");
        }
        return dur;
    }
    getStart(inSec = true) {
        return inSec ? this.startTime : (this.startTime * 1000);
    }
    getEnd(inSec = true) {
        return inSec ? this.endTime : (this.endTime * 1000);
    }
}

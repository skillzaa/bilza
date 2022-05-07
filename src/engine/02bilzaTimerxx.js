import CompArrayObj from "./01compsArrayObj.js";
export default class BilzaTimer extends CompArrayObj {
    constructor(timeEndSec) {
        super();
        this.timeStart = null;
        this.timeEnd = timeEndSec * 1000;
        this.interval = null;
        this.msPerFrame = 1000;
    }
    getTimeEnd() {
        return this.timeEnd;
    }
    setTimeEnd(n) {
        this.timeEnd = n;
        return this.timeEnd;
    }
    getMsDelta() {
        if (this.timeStart == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.timeStart;
        }
    }
    setMsDelta(n) {
        if (this.timeStart == null) {
            return 0;
        }
        if (n > this.getTimeEnd() || n < 0) {
            return 0;
        }
        this.timeStart = new Date().getTime() - n;
        return this.timeStart;
    }
    stop() {
        this.timeStart = null;
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
        return true;
    }
}

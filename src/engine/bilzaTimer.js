import CompArrayObj from "./compsArrayObj.js";
export default class BilzaTimer extends CompArrayObj {
    constructor(timeEnd = Number.MAX_SAFE_INTEGER) {
        super();
        this.timeStart = null;
        this.timeEnd = timeEnd;
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
    stop() {
        this.timeStart = null;
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
        return true;
    }
}

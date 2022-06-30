export default class StopWatch {
    constructor() {
        this.runningStartTimeTS = null;
        this.interval = null;
        this.msPerFrame = 20;
    }
    isRunning() {
        if (this.runningStartTimeTS == null) {
            return false;
        }
        else {
            return true;
        }
    }
    stop() {
        this.runningStartTimeTS = null;
        if (this.interval !== null) {
            clearInterval(this.interval);
        }
        return true;
    }
    getMsDelta() {
        if (this.runningStartTimeTS == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.runningStartTimeTS;
        }
    }
}

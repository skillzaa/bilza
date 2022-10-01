export default class StopWatch {
    constructor() {
        this.startTimeStamp = null;
    }
    isRunning() {
        if (this.startTimeStamp == null) {
            return false;
        }
        else {
            return true;
        }
    }
    stop() {
        this.startTimeStamp = null;
        return true;
    }
    start() {
        this.startTimeStamp = new Date().getTime();
        return true;
    }
    getMsDelta() {
        if (this.startTimeStamp == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.startTimeStamp;
        }
    }
}

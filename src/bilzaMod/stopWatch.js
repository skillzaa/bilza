export default class StopWatch {
    constructor() {
        this.runningStartTimeTS = null;
        this.interval = null;
        this.msPerFrame = 20;
        this._stopFlag = true;
    }
    isRunning() {
        if (this.runningStartTimeTS == null) {
            return false;
        }
        else {
            return true;
        }
    }
    shouldStop() {
        return this._stopFlag;
    }
    stop() {
        this.runningStartTimeTS = null;
        this._stopFlag = true;
        return true;
    }
    start() {
        this._stopFlag = false;
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

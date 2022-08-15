export default class Delay {
    constructor(delaySec) {
        this.delayValue = delaySec;
        this.lastFrameRun = null;
    }
    isSegChanged(rTimeMs) {
        if (this.lastFrameRun == null) {
            this.lastFrameRun = rTimeMs;
            return true;
        }
        const lapsed = rTimeMs - this.lastFrameRun;
        if (lapsed <= 0) {
            return true;
        }
        if (this.delayValue <= lapsed) {
            this.lastFrameRun = rTimeMs;
            return true;
        }
        else {
            return false;
        }
    }
}

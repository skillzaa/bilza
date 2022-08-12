export default class BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, delayInMS = 0) {
        this.delayInMS = delayInMS;
        this.delayInMSCounter = 0;
        if (rTimeMsStart < 0 || rTimeMsEnd < 0) {
            throw new Error("time can not be negative");
        }
        if (rTimeMsEnd <= rTimeMsStart) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        this.rTimeMsStart = rTimeMsStart;
        this.rTimeMsEnd = rTimeMsEnd;
        this._ret_val = null;
    }
    update(rTimeMs, baseGotoValue = 0) {
        return true;
    }
    value() {
        return this._ret_val;
    }
    qualifyToRun(rTimeMs) {
        if (rTimeMs < this.rTimeMsStart || rTimeMs > this.rTimeMsEnd) {
            return false;
        }
        else {
            return true;
        }
    }
    xFramesSkipped(rTimeMs) {
        return true;
    }
    init(canvasWidthHeight) {
        return true;
    }
    percToPix(canvasWidthHeight, perc) {
        return ((canvasWidthHeight / 100) * perc);
    }
}

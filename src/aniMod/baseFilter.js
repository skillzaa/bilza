export default class BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, delayInMS = 0) {
        this.delayInMS = delayInMS;
        this.delayInMSCounter = 0;
        if (msDeltaStart < 0 || msDeltaEnd < 0) {
            throw new Error("time can not be negative");
        }
        if (msDeltaEnd <= msDeltaStart) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
        this._ret_val = null;
    }
    update(msDelta, baseGotoValue = 0) {
        return true;
    }
    value() {
        return this._ret_val;
    }
    qualifyToRun(msDelta) {
        if (msDelta < this.msDeltaStart || msDelta > this.msDeltaEnd) {
            return false;
        }
        else {
            return true;
        }
    }
    xFramesSkipped(msDelta) {
        return true;
    }
    init(canvasWidthHeight) {
        return true;
    }
    percToPix(canvasWidthHeight, perc) {
        return ((canvasWidthHeight / 100) * perc);
    }
}

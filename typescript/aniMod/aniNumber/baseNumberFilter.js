export default class BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, delayInMS = 0, incommingData = []) {
        this.delayInMS = delayInMS;
        this.delayInMSCounter = 0;
        this.incommingData = incommingData;
        this._animatedValue = null;
        if (msDeltaStart < 0 || msDeltaEnd < 0) {
            throw new Error("time can not be negative");
        }
        if (msDeltaEnd <= msDeltaStart) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
    }
    update(msDelta, baseValue = 0) {
        return true;
    }
    init(canvasWidthHeight) {
        return true;
    }
    percToPix(canvasWidthHeight, perc) {
        return ((canvasWidthHeight / 100) * perc);
    }
    animatedValue() {
        return this._animatedValue;
    }
}

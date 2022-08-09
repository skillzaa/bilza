export default class PreInitRandom {
    constructor(msDeltaStart, msDeltaEnd, min = 0, max = 100, delayInMilliSec = 0) {
        this.min = 0;
        this.max = 100;
        this.delayInMilliSec = 0;
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
        this.min = min;
        this.max = max;
        this.delayInMilliSec = delayInMilliSec;
    }
}

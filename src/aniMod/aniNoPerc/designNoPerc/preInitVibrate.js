export default class PreInitVibrate {
    constructor(msDeltaStart, msDeltaEnd, offset = 10, delayInMS = 0) {
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
        this.offset = offset;
        this.delayInMS = delayInMS;
    }
}

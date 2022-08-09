export default class PreInitJumpBetween {
    constructor(msDeltaStart, msDeltaEnd, pointOne = 1, pointTwo = 10, delayInMS = 0) {
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
        this.delayInMS = delayInMS;
    }
}

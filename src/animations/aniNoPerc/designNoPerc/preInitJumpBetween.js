export default class PreInitJumpBetween {
    constructor(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, skipFrames = 0) {
        this.startTimeSec = startTimeSec;
        this.endTimeSec = endTimeSec;
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
        this.skipFrames = skipFrames;
    }
}

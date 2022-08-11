export default class PreInitOscilate {
    constructor(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, skipFrames = 0) {
        this.startTimeSec = startTimeSec;
        this.endTimeSec = endTimeSec;
        this.startValue = pointOne;
        this.endValue = pointTwo;
        this.speed = skipFrames;
    }
}

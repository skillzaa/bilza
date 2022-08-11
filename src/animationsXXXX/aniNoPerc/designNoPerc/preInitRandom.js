export default class PreInitRandom {
    constructor(startTimeSec, endTimeSec, min = 1, max = 10, skipFrames = 0) {
        this.min = 1;
        this.max = 10;
        this.skipFrames = 0;
        this.startTimeSec = startTimeSec;
        this.endTimeSec = endTimeSec;
        this.min = min;
        this.max = max;
        this.skipFrames = skipFrames;
    }
}

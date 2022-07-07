export default class SkipXFrames {
    constructor(framesToSkip) {
        this.framesToSkip = framesToSkip;
        this.skipframesCounter = 0;
    }
    skipped() {
        if (this.skipframesCounter < this.framesToSkip) {
            this.skipframesCounter += 1;
            return false;
        }
        else {
            this.skipframesCounter = 0;
            return true;
        }
    }
}

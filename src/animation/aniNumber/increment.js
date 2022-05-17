export default class Increment {
    constructor(startTime, endTime, startValue, endValue) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.startValue = startValue;
        this.endValue = endValue;
        let xDiff = endValue - startValue;
        let timeDiff = endTime - startTime;
        this.increment = Math.ceil(timeDiff / xDiff);
        this.val = this.startTime;
    }
    update(msDelta) {
        this.val = this.val + this.increment;
        return true;
    }
    value() {
        return this.val;
    }
}

export default class Increment {
    constructor(from, to, startValue, endValue) {
        this.from = from;
        this.to = to;
        this.startValue = startValue;
        this.endValue = endValue;
        let xDiff = endValue - startValue;
        let timeDiff = (to - from) * 1000;
        this.DELAYCOUNTER = Math.ceil(timeDiff / xDiff);
        this.lastMsDelta = 0;
        this.val = this.from;
    }
    update(msDelta) {
        if (this.lastMsDelta == 0) {
            this.lastMsDelta = msDelta;
        }
        if (msDelta > (10000) && msDelta < (20000)) {
            if ((msDelta - this.lastMsDelta) > this.DELAYCOUNTER) {
                this.val = this.val + 1;
                this.lastMsDelta = msDelta;
            }
        }
        return true;
    }
    value() {
        return this.val;
    }
}

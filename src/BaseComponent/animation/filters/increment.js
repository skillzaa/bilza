export default class Increment {
    constructor(from, to, startValue, endValue) {
        if (from >= to) {
            throw new Error("from can not be larger than to");
        }
        if (startValue >= endValue) {
            throw new Error("startValue can not be larger than endValue");
        }
        this.FROM = from * 1000;
        this.TO = to * 1000;
        this.STARTVALUE = startValue;
        this.ENDVALUE = endValue;
        this.timeDiff = this.TO - this.FROM;
        this.xDiff = this.ENDVALUE - this.STARTVALUE;
        this.val = null;
    }
    update(msDelta) {
        if (msDelta > (this.FROM) && msDelta <= (this.TO)) {
            const timeLapsed = this.getTimeLapsed(msDelta);
            const timePerc = Math.ceil((timeLapsed / this.timeDiff) * 100);
            if (timePerc < 0 || timePerc > 100) {
                throw new Error("timePerc error: timePerc can only be between 0 and 100");
            }
            const xPerc = Math.ceil(this.xDiff / 100 * timePerc);
            this.val = this.STARTVALUE + xPerc;
            return true;
        }
        else {
            this.val = null;
            return false;
        }
    }
    value() {
        return this.val;
    }
    getTimePerc(to) {
    }
    getTimeLapsed(msDelta) {
        if (msDelta > this.TO) {
            throw new Error("getTimeLapsed error");
        }
        return Math.ceil(msDelta - this.FROM);
    }
}

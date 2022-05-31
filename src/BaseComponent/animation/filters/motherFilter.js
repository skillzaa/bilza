export default class Motherfilter {
    constructor() {
        this.active = false;
        this.exhausted = false;
        this._ret_val = null;
        this.FROM = 0;
        this.TO = 0;
        this.ENDVALUE = 0;
        this.TOTALFRAMES = 0;
        this.SYSTEMMAXVALUE = 3000;
        this.SYSTEMMINVALUE = -1000;
        this.TIMEDIFFSEC = 0;
        this.XDIFF = 0;
        this.STARTVALUE = 0;
        this.framesCounter = 0;
        this.ADDFACTOR = 0;
    }
    setActive(msDelta) {
        if (this.active == false) {
            if (msDelta > (this.FROM * 1000) && msDelta <= (this.TO * 1000)) {
                this.active = true;
                return true;
            }
            else {
                this._ret_val = null;
                return false;
            }
        }
        return false;
    }
    isActive() {
        return this.active;
    }
    setExhausted(msDelta) {
        if (msDelta > (this.TO * 1000)) {
            this.exhausted = true;
            return true;
        }
        return false;
    }
    isExhausted() {
        return this.exhausted;
    }
    value() {
        return this._ret_val;
    }
    getTimeLapsed(msDelta) {
        return Math.ceil(msDelta - this.FROM);
    }
    getXDiff(startValue, endValue) {
        let r = null;
        if (endValue > 0) {
            r = startValue - endValue;
        }
        else {
            r = startValue + Math.abs(endValue);
        }
        if (r !== null) {
            return r;
        }
        else {
            throw new Error("failed to getXDiff");
        }
    }
}

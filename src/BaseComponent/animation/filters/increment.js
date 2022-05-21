export default class Increment {
    constructor(from, to, startValue, endValue) {
        this.FROM = this.getFrom(from, to);
        this.TO = this.getTo(from, to);
        this.STARTVALUE = Math.ceil(startValue);
        this.ENDVALUE = this.getEndValue(endValue, startValue);
        this.TIMEDIFF = Math.ceil(this.TO - this.FROM);
        this.XDIFF = this.getXDiff(this.ENDVALUE, this.STARTVALUE);
        this.DELAYFACTOR = this.getDelayFactor(this.TIMEDIFF, this.XDIFF);
        this.delayCounter = 0;
        this._ret_val = this.STARTVALUE;
        this.SYSTEMMAXENDVALUE = 3000;
        this.SYSTEMMINSTARTVALUE = -1000;
    }
    update(msDelta) {
        if (msDelta > (this.FROM) && msDelta <= (this.TO)) {
            const timeLapsed = this.getTimeLapsed(msDelta);
            const factor = Math.ceil(timeLapsed / this.DELAYFACTOR);
            if (this.STARTVALUE > 0) {
                this._ret_val = Math.abs(this.STARTVALUE + factor);
            }
            else {
                this._ret_val = this.STARTVALUE + factor;
            }
            return true;
        }
        else {
            this._ret_val = null;
            return false;
        }
    }
    value() {
        return this._ret_val;
    }
    getTimeLapsed(msDelta) {
        if (msDelta > this.TO) {
            throw new Error("getTimeLapsed error: msDelta can not be bigger than To value");
        }
        return Math.ceil(msDelta - this.FROM);
    }
    getFrom(from, to) {
        if (from < 0) {
            throw new Error("from can not be smaller than zero");
        }
        if (from >= to) {
            throw new Error("from can not be smaller than zero");
        }
        let r = Math.ceil(from * 1000);
        return r;
    }
    getTo(from, to) {
        if (from >= to) {
            throw new Error("from can not be smaller than zero");
        }
        if (to < 1) {
            throw new Error("To can not be smaller than One");
        }
        let r = Math.ceil(to * 1000);
        return r;
    }
    getEndValue(endValue, startValue) {
        if (endValue > this.SYSTEMMAXENDVALUE) {
            throw new Error("endValue is too large");
        }
        if (endValue < 0) {
            throw new Error("endValue can not be negative");
        }
        return (Math.ceil(endValue));
    }
    getDelayFactor(timeDiff, xDiff) {
        return Math.ceil(timeDiff / xDiff);
    }
    getXDiff(endValue, startValue) {
        let r = null;
        if (startValue > 0) {
            r = endValue - startValue;
        }
        else {
            r = endValue + Math.abs(startValue);
        }
        if (r !== null) {
            return r;
        }
        else {
            throw new Error("failed to getXDiff");
        }
    }
}

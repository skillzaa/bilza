export default class Decrement {
    constructor(from = 0, to = 10, startValue = 100, endValue = 0) {
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
            const factorMinus = Math.ceil(this.XDIFF - factor);
            if (this.ENDVALUE > 0) {
                this._ret_val = Math.abs(this.ENDVALUE + factorMinus);
            }
            else {
                this._ret_val = this.ENDVALUE + factorMinus;
            }
            console.log("msDelta", msDelta, "ret", this._ret_val);
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
    getStartValue(startValue, endValue) {
        if (startValue < endValue) {
            throw new Error("start value needs to be bigger than the end value for a decrement operation");
        }
        if (startValue < 0) {
            throw new Error("startValue can not be negative");
        }
        return Math.ceil(startValue);
    }
    getEndValue(endValue, startValue) {
        if (endValue > this.SYSTEMMAXENDVALUE) {
            throw new Error("endValue is too large");
        }
        return (Math.ceil(endValue));
    }
    getDelayFactor(timeDiff, xDiff) {
        return Math.ceil(timeDiff / xDiff);
    }
    getXDiff(endValue, startValue) {
        let r = null;
        if (endValue > 0) {
            r = Math.abs(startValue - endValue);
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

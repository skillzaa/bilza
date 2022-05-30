export default class Decrement {
    constructor(from, to, startValue, endValue) {
        this.FROM = this.getFrom(from, to);
        this.TO = this.getTo(from, to);
        this.TIMEDIFFSEC = Math.ceil(this.TO - this.FROM);
        this.STARTVALUE = this.getStartValue(startValue, endValue);
        this.ENDVALUE = this.getEndValue(startValue, endValue);
        this.XDIFF = this.getXDiff(this.STARTVALUE, this.ENDVALUE);
        this.TOTALFRAMES = Math.ceil(this.TIMEDIFFSEC * 60);
        this.framesCounter = 0;
        this.active = false;
        this.ADDFACTOR = this.XDIFF / this.TOTALFRAMES;
        this._ret_val = null;
        this.SYSTEMMAXVALUE = 3000;
        this.SYSTEMMINVALUE = -1000;
    }
    update(msDelta) {
        if (this.active == false) {
            if (msDelta > (this.FROM * 1000) && msDelta <= (this.TO * 1000)) {
                this.active = true;
            }
            else {
                this._ret_val = null;
                return false;
            }
        }
        if (this.active == true && (this.framesCounter <= this.TOTALFRAMES)) {
            const rezult = Math.ceil(this.ADDFACTOR * this.framesCounter);
            this.framesCounter += 1;
            if (this.STARTVALUE >= 0) {
                this._ret_val = Math.abs(this.STARTVALUE - rezult);
            }
            else {
                this._ret_val = this.STARTVALUE + rezult;
            }
            return true;
        }
        else {
            this._ret_val = null;
            this.active = false;
            return false;
        }
    }
    value() {
        return this._ret_val;
    }
    getTimeLapsed(msDelta) {
        return Math.ceil(msDelta - this.FROM);
    }
    getFrom(from, to) {
        if (from < 0) {
            throw new Error("from can not be smaller than zero");
        }
        if (from >= to) {
            throw new Error("from can not be smaller than zero");
        }
        return from;
    }
    getTo(from, to) {
        if (from >= to) {
            throw new Error("from can not be smaller than zero");
        }
        if (to < 1) {
            throw new Error("To can not be smaller than One");
        }
        return to;
    }
    getStartValue(startValue, endValue) {
        if (startValue > this.SYSTEMMAXVALUE) {
            throw new Error("start Value (for decrement operation) is too large");
        }
        if (startValue < 1) {
            throw new Error("start Value (for decrement operation) can not be negative");
        }
        return Math.abs(Math.ceil(startValue));
    }
    getEndValue(startValue, endValue) {
        if (endValue > this.SYSTEMMINVALUE) {
            throw new Error("start Value (for decrement operation) is too large");
        }
        if (endValue > startValue) {
            throw new Error("end Value (for decrement operation) can not be larger than start value");
        }
        return Math.ceil(endValue);
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

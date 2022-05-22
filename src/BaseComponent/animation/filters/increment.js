export default class Increment {
    constructor(from, to, startValue, endValue) {
        this.FROM = this.getFrom(from, to);
        this.TO = this.getTo(from, to);
        this.TIMEDIFFSEC = Math.ceil(this.TO - this.FROM);
        this.STARTVALUE = Math.ceil(startValue);
        this.ENDVALUE = this.getEndValue(endValue, startValue);
        this.XDIFF = this.getXDiff(this.ENDVALUE, this.STARTVALUE);
        this.TOTALFRAMES = Math.ceil(this.TIMEDIFFSEC * 60);
        this.framesCounter = 0;
        this.active = false;
        this.ADDFACTOR = this.XDIFF / this.TOTALFRAMES;
        this._ret_val = this.STARTVALUE;
        this.SYSTEMMAXENDVALUE = 3000;
        this.SYSTEMMINSTARTVALUE = -1000;
    }
    update(msDelta) {
        if (this.active == false) {
            if (msDelta > (this.FROM * 1000) && msDelta <= (this.TO * 1000)) {
                this.active = true;
            }
            else {
                return false;
            }
        }
        if (this.active == true && (this.framesCounter <= this.TOTALFRAMES)) {
            const rezult = Math.ceil(this.ADDFACTOR * this.framesCounter);
            this.framesCounter += 1;
            if (this.STARTVALUE >= 0) {
                this._ret_val = Math.abs(this.STARTVALUE + rezult);
                console.log("msDelta", msDelta, "this._ret_Val", this._ret_val);
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
    getEndValue(endValue, startValue) {
        if (endValue > this.SYSTEMMAXENDVALUE) {
            throw new Error("endValue is too large");
        }
        if (endValue < 0) {
            throw new Error("endValue can not be negative");
        }
        return (Math.ceil(endValue));
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

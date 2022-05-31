import Motherfilter from "./motherFilter.js";
export default class Increment extends Motherfilter {
    constructor(from, to, startValue, endValue) {
        super();
        this.FROM = this.getFrom(from, to);
        this.TO = this.getTo(from, to);
        this.TIMEDIFFSEC = Math.ceil(this.TO - this.FROM);
        this.STARTVALUE = Math.ceil(startValue);
        this.ENDVALUE = this.getEndValue(endValue, startValue);
        this.XDIFF = this.getXDiff(this.ENDVALUE, this.STARTVALUE);
        this.TOTALFRAMES = Math.ceil(this.TIMEDIFFSEC * 60);
        this.framesCounter = 0;
        this.ADDFACTOR = this.XDIFF / this.TOTALFRAMES;
    }
    update(msDelta) {
        this.setActive(msDelta);
        this.setExhausted(msDelta);
        if (this.active == true && (this.framesCounter <= this.TOTALFRAMES)) {
            const rezult = Math.ceil(this.ADDFACTOR * this.framesCounter);
            this.framesCounter += 1;
            if (this.STARTVALUE >= 0) {
                this._ret_val = Math.abs(this.STARTVALUE + rezult);
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
        if (endValue > this.SYSTEMMAXVALUE) {
            throw new Error("endValue is too large");
        }
        if (endValue < 0) {
            throw new Error("endValue can not be negative");
        }
        return (Math.ceil(endValue));
    }
}

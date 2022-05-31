import Motherfilter from "./motherFilter.js";
export default class Decrement extends Motherfilter {
    constructor(from, to, startValue, endValue) {
        super();
        this.FROM = this.getFrom(from, to);
        this.TO = this.getTo(from, to);
        this.TIMEDIFFSEC = Math.ceil(this.TO - this.FROM);
        this.STARTVALUE = this.getStartValue(startValue, endValue);
        this.ENDVALUE = this.getEndValue(startValue, endValue);
        this.XDIFF = this.getXDiff(this.STARTVALUE, this.ENDVALUE);
        this.TOTALFRAMES = Math.ceil(this.TIMEDIFFSEC * 60);
        this.framesCounter = 0;
        this.ADDFACTOR = this.XDIFF / this.TOTALFRAMES;
        this._ret_val = null;
    }
    update(msDelta) {
        this.setActive(msDelta);
        this.setExhausted(msDelta);
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
        if (endValue <= this.SYSTEMMINVALUE) {
            throw new Error("start Value (for decrement operation) is too large");
        }
        if (endValue > startValue) {
            throw new Error("end Value (for decrement operation) can not be larger than start value");
        }
        return Math.ceil(endValue);
    }
}

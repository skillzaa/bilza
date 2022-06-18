export default class IncrementTimed {
    constructor(startTime, endTime, startValue, endValue) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.startValue = startValue;
        this.endValue = endValue;
        this.timeDiff = Math.abs(this.endTime - this.startTime);
        this.Xdiff = Math.abs(this.startValue - this.endValue);
        this.exhausted = false;
        this._ret_val = null;
        this.SYSTEMMAXVALUE = 3000;
        this.SYSTEMMINVALUE = -3000;
    }
    update(msDelta) {
        const timeLapsed = this.getTimeLapsed(msDelta);
        const timeLapPercent = (timeLapsed / (this.timeDiff * 1000)) * 100;
        const _ret_val = (this.Xdiff / 100) * timeLapPercent;
        console.log("_ret_val", _ret_val);
        return true;
    }
    setExhausted(msDelta) {
        if (msDelta > (this.endTime * 1000)) {
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
        return Math.ceil(msDelta - this.startTime);
    }
}

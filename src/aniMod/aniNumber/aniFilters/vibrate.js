import BaseFilter from "../../baseFilter.js";
export default class Vibrate extends BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, offset = 10, delayInMS = 0) {
        super(msDeltaStart, msDeltaEnd, delayInMS);
        this.offset = offset;
    }
    update(msDelta, baseGotoValue) {
        if (Math.random() > 0.5) {
            this._ret_val = baseGotoValue + this.offset;
        }
        else {
            this._ret_val = baseGotoValue - this.offset;
        }
        return true;
    }
}

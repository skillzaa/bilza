export default class Duration {
    constructor() {
        this._pvt_duration_val = 0;
    }
    len(inSec = true) {
        if (inSec) {
            return (this._pvt_duration_val);
        }
        else {
            return (this._pvt_duration_val * 1000);
        }
    }
    extend(n) {
        this._pvt_duration_val += n;
        return this._pvt_duration_val;
    }
    set(n) {
        this._pvt_duration_val = n;
        return this._pvt_duration_val;
    }
}

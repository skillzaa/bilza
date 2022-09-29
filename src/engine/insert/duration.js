export default class Duration {
    constructor() {
        this._pvt_duration_val = 0;
    }
    len(inMilliSeconds = true) {
        if (inMilliSeconds) {
            return (this._pvt_duration_val * 1000);
        }
        else {
            return (this._pvt_duration_val);
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

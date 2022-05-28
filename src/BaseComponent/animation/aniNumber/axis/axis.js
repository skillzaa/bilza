import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
export default class Axis {
    constructor() {
    }
    notInitError() {
        throw new Error("XAxis is not initialized yet");
    }
    checkNonNull(n) {
        let r = 0;
        if (n == null) {
            this.notInitError();
        }
        else {
            r = n;
        }
        return r;
    }
    newIncrement(from, to, startValue, endValue) {
        let c = new Increment(from, to, startValue, endValue);
        return c;
    }
    newDecrement(from, to, startValue, endValue) {
        let c = new Decrement(from, to, startValue, endValue);
        return c;
    }
}

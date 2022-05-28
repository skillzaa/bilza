import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
export default class Axis {
    constructor(defaultValue) {
        this.animations = [];
        this._ret_value = defaultValue;
        this._set_value = null;
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
    runAnimations(msDelta) {
        for (let i = 0; i < this.animations.length; i++) {
            const ani = this.animations[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._ret_value = v;
            }
        }
    }
    setValue(n) {
        this._set_value = n;
    }
}

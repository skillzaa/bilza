import IdentityFil from "../filters/identityFil.js";
import JumpBetween from "../filters/jumpBetween.js";
export default class AniProp {
    constructor(defaultValue) {
        this.filtersArr = [];
        this.defaultValue = defaultValue;
        this._value = null;
    }
    update(rTimeMs) {
        const baseGoto = this.getBaseFilter(rTimeMs);
        if (baseGoto == null) {
            this._value = this.defaultValue;
            return false;
        }
        else {
            baseGoto.update(rTimeMs);
            this._value = baseGoto.value();
        }
        return true;
    }
    value() {
        if (this._value == null) {
            return this.defaultValue;
        }
        else {
            return this._value;
        }
    }
    set(n) {
        this.defaultValue = n;
        return this.defaultValue;
    }
    getBaseFilter(rTimeMs) {
        if (this.filtersArr.length < 1) {
            return null;
        }
        let lastFrameChecked = 0;
        let rez = null;
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (rTimeMs >= (fil.rTimeMsStart)) {
                if ((fil.rTimeMsStart) >= lastFrameChecked) {
                    lastFrameChecked = (fil.rTimeMsStart);
                    rez = fil;
                }
            }
        }
        return rez;
    }
    addFilter(bfil) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.rTimeMsStart == bfil.rTimeMsStart) {
                throw new Error(`There is another animation inserted at exectly this frame (number ${fil.rTimeMsStart}), please either remove the previous animation or change time for your new animation`);
            }
        }
        this.filtersArr.push(bfil);
    }
    goto(atSec, value) {
        const v = new IdentityFil(atSec * 1000, (atSec * 1000) + 1000, value, value, 0);
        this.addFilter(v);
        return false;
    }
    jumpBetween(startSec, endSec, firstValue, secondValue, delayInMS = 1000) {
        const jb = new JumpBetween(startSec * 1000, endSec * 1000, firstValue, secondValue, delayInMS * 1000);
        this.addFilter(jb);
    }
}

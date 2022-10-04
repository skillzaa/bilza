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
            this._value = baseGoto.filterValue();
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
            if (rTimeMs >= (fil.startTimeMs)) {
                if ((fil.startTimeMs) >= lastFrameChecked) {
                    lastFrameChecked = (fil.startTimeMs);
                    rez = fil;
                }
            }
        }
        return rez;
    }
    addFilter(bfil) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.startTimeMs == bfil.startTimeMs) {
                throw new Error(`There is another animation inserted at exectly this frame (number ${fil.startTimeMs}) for this prop, please either remove the previous animation or change time of your new animation`);
            }
        }
        this.filtersArr.push(bfil);
    }
    goto(atSec, value) {
        const v = new IdentityFil(atSec * 1000, (atSec * 1000) + 1000, value);
        this.addFilter(v);
        return false;
    }
    jumpBetween(startSec, endSec, firstValue, secondValue, delayInMS = 1000) {
        const jb = new JumpBetween(startSec * 1000, endSec * 1000, firstValue, secondValue, delayInMS);
        this.addFilter(jb);
    }
}

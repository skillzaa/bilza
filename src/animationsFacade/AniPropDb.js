import AniProp from "../animations/aniProp/aniProp.js";
import IdentityFil from "../animations/filters/identityFil.js";
import JumpBetween from "../animations/filters/jumpBetween.js";
export default class AniPropDb {
    constructor(value) {
        this.filtersArr = [];
        this._value = value;
    }
    set(_value) {
        this._value = _value;
        return this._value;
    }
    value() {
        return this._value;
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
    getEngineProp() {
        const prop = new AniProp(this._value);
        prop.filtersArr = this.filtersArr;
        return prop;
    }
}

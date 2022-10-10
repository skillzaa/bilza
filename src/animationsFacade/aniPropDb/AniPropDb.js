import IdentityFil from "../filters/identityFil.js";
import JumpBetween from "../filters/jumpBetween.js";
export default class AniPropDb {
    constructor(value) {
        this.baseValue = value;
        this.filtersArr = [];
        this._filterValue = null;
    }
    getBaseValue() {
        return this.baseValue;
    }
    set(value) {
        this._filterValue = value;
        return this._filterValue;
    }
    value() {
        if (this._filterValue == null) {
            return this.baseValue;
        }
        else {
            return this._filterValue;
        }
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
    getFiltersArray() {
        return this.filtersArr;
    }
}

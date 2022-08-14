import IdentityFil from "../filters/identityFil.js";
export default class AniProp {
    constructor(defaultValue) {
        this.filtersArr = [];
        this.defaultFilter = new IdentityFil(0, 100, defaultValue);
        this._value = null;
    }
    update(rTimeMs) {
        const baseGoto = this.getBaseFilter(rTimeMs);
        if (baseGoto == null) {
            this._value = this.defaultFilter.animatedValue();
            return false;
        }
        else {
            baseGoto.update(rTimeMs);
            const animatedValue = baseGoto.animatedValue();
            if (animatedValue !== null) {
                this._value = animatedValue;
            }
            else {
                this._value = this.defaultFilter.animatedValue();
            }
        }
        return true;
    }
    value() {
        if (this._value == null) {
            return this.defaultFilter.animatedValue();
        }
        else {
            return this._value;
        }
    }
    set(n) {
        this.defaultFilter.setBaseValue(n);
        return n;
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
        this.filtersArr.push(bfil);
    }
    goto(rTimeMs, value) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.rTimeMsStart == rTimeMs) {
                fil.setBaseValue(value);
                return true;
            }
        }
        const v = new IdentityFil(rTimeMs, rTimeMs + 1000, value, 0);
        this.addFilter(v);
        return false;
    }
}

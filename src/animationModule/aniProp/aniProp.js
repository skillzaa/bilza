import ConstantVal from "../filters/constantVal.js";
export default class AniProp {
    constructor(defaultValue) {
        this.filtersArr = [];
        this.defaultFilter = new ConstantVal(0, 100, defaultValue);
        this._value = defaultValue;
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
        return this._value;
    }
    set(n) {
        this.defaultFilter.setBaseValue(n);
        this._value = this.defaultFilter.animatedValue();
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
}

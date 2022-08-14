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
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.rTimeMsStart == bfil.rTimeMsStart) {
                throw new Error(`There is another animation inserted at exectly this frame (number ${fil.rTimeMsStart}), please either remove the previous animation or change time for your new animation`);
            }
        }
        this.filtersArr.push(bfil);
    }
    goto(rTimeMs, value) {
        const v = new IdentityFil(rTimeMs, rTimeMs + 1000, value, 0);
        this.addFilter(v);
        return false;
    }
    jumpBetween(rTimeMsStart, rTimeMsEnd, pointOne, pointTwo, delaySec = 1000) {
        const timeDiff = rTimeMsEnd - rTimeMsStart;
        if (timeDiff % delaySec !== 0) {
            const endFil = new IdentityFil(rTimeMsEnd, rTimeMsEnd + 1000, pointTwo, 0);
            this.addFilter(endFil);
        }
        const noOfIter = Math.floor(timeDiff / delaySec);
        for (let i = 0; i < noOfIter; i++) {
            if ((i % 2) == 0) {
                const filEven = new IdentityFil(rTimeMsStart + (i * delaySec), rTimeMsEnd + 1000, pointOne, 0);
                this.addFilter(filEven);
            }
            else {
                const filOdd = new IdentityFil(rTimeMsStart + (i * delaySec), rTimeMsEnd + 1000, pointTwo, 0);
                this.addFilter(filOdd);
            }
        }
    }
}

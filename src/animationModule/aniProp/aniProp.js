export default class AniProp {
    constructor(defaultValue) {
        this.filtersArr = [];
        this.defaultValue = defaultValue;
        this._value = this.defaultValue;
    }
    update(rTimeMs) {
        const baseGoto = this.getBaseFilter(rTimeMs);
        if (baseGoto == null) {
            this._value = this.defaultValue;
            return false;
        }
        else {
            baseGoto.update(rTimeMs);
            const animatedValue = baseGoto.animatedValue();
            if (animatedValue !== null) {
                this._value = animatedValue;
            }
            else {
                this._value = this.defaultValue;
            }
        }
        return true;
    }
    value() {
        return this._value;
    }
    set(n) {
        this.defaultValue = n;
        this._value = n;
        return n;
    }
    getBaseFilter(rTimeMs) {
        if (this.filtersArr.length < 1) {
            throw new Error("BaseGoto not found");
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

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
    set(_value) {
        this._value = _value;
        return this._value;
    }
    value() {
        if (this._value == null) {
            return this.defaultValue;
        }
        else {
            return this._value;
        }
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
}

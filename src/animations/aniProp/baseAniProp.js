export default class BaseAniProp {
    constructor(value) {
        this.baseValue = value;
        this.filtersArr = [];
        this._filterValue = null;
    }
    getBaseValue() {
        return this.baseValue;
    }
    set(value) {
        this.baseValue = value;
        return this.baseValue;
    }
    setFilterValue(value) {
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
}

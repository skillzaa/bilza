import FiltersCol from "./filtersCol.js";
export default class AniProp extends FiltersCol {
    constructor(defaultValue) {
        super();
        this._value = defaultValue;
        this.goto(0, defaultValue);
    }
    update(rTimeMs) {
        const baseGoto = this.getBaseFilter(rTimeMs);
        baseGoto.update(rTimeMs);
        const animatedValue = baseGoto.animatedValue(rTimeMs);
        this._value = animatedValue;
        return true;
    }
    value() {
        return this._value;
    }
    set(n) {
        this._value = n;
        this.goto(0, n);
        return n;
    }
}

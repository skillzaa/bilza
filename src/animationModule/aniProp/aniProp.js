import FiltersCol from "./filtersCol.js";
export default class AniProp extends FiltersCol {
    constructor(defaultValue) {
        super();
        this._value = defaultValue;
        this.goto(0, defaultValue);
    }
    update(msDelta) {
        const baseGoto = this.getBaseFilter(msDelta);
        const animatedValue = baseGoto.animatedValue(msDelta);
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

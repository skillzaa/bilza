import SetOnce from "./filters/setOnce_goto.js";
export default class AniString {
    constructor(defaultValue = "") {
        this._value = defaultValue;
        this.filters = [];
    }
    update(msDelta) {
        this.runFilters(msDelta);
        return true;
    }
    value() {
        return this._value;
    }
    set(n) {
        this._value = n;
        return this._value;
    }
    goto(startTimeSec, theValue = 0) {
        const v = new SetOnce(startTimeSec, theValue);
        this.filters.push(v);
    }
    runFilters(msDelta) {
        for (let i = 0; i < this.filters.length; i++) {
            const ani = this.filters[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._value = v;
            }
        }
    }
}

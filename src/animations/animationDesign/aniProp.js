export default class AniProp {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
        this.lastGotoValue = defaultValue;
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
    runFilters(msDelta) {
        let filterWasRun = false;
        for (let i = 0; i < this.filters.length; i++) {
            const ani = this.filters[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                filterWasRun = true;
                this._value = v;
            }
        }
        return filterWasRun;
    }
}

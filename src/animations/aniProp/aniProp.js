import GotoData from "./gotoData.js";
export default class AniProp {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
        this.lastGotoValue = defaultValue;
        this._value = defaultValue;
        this.filters = [];
        this.GotoDataArray = [];
    }
    update(msDelta) {
        if (this.runFilters(msDelta) == true) {
            return true;
        }
        this.runLastGoto(msDelta);
        return false;
    }
    value() {
        return this._value;
    }
    set(n) {
        this._value = n;
        return this._value;
    }
    goto(startTimeSec, theValue) {
        const v = new GotoData(startTimeSec * 1000, theValue);
        this.GotoDataArray.push(v);
    }
    runDefaultValue() {
        this._value = this.defaultValue;
    }
    runLastGoto(msDelta) {
        if (this.GotoDataArray.length < 1) {
            return false;
        }
        let found = false;
        let frame = 0;
        for (let i = 0; i < this.GotoDataArray.length; i++) {
            const elm = this.GotoDataArray[i];
            if (msDelta >= (elm.frame)) {
                if ((elm.frame) >= frame) {
                    frame = (elm.frame);
                    this._value = elm.value;
                    found = true;
                }
            }
        }
        return found;
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

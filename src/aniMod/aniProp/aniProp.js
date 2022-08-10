import GotoData from "./gotoData.js";
export default class AniProp {
    constructor(defaultValue) {
        this.gotoArray = [];
        this.filters = [];
        this.goto(0, defaultValue);
        this._value = defaultValue;
    }
    update(msDelta) {
        this.getBaseGotoValue(msDelta);
        this._value = this.runFilters(msDelta, this._value);
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
    runFilters(msDelta, baseGotoValue) {
        let rez = baseGotoValue;
        for (let i = 0; i < this.filters.length; i++) {
            const ani = this.filters[i];
            if (ani.qualifyToRun(msDelta) == false) {
                continue;
            }
            ani.update(msDelta, rez);
            let v = ani.value();
            if (v != null) {
                rez = v;
            }
        }
        return rez;
    }
    getBaseGotoValue(msDelta) {
        if (this.gotoArray.length < 1) {
            return false;
        }
        let lastFrameChecked = 0;
        let rez = null;
        for (let i = 0; i < this.gotoArray.length; i++) {
            const elm = this.gotoArray[i];
            if (msDelta >= (elm.msDelta)) {
                if ((elm.msDelta) >= lastFrameChecked) {
                    lastFrameChecked = (elm.msDelta);
                    rez = elm.value;
                }
            }
        }
        if (rez !== null) {
            this._value = rez;
            return true;
        }
        else {
            return false;
        }
    }
    goto(msDelta, value) {
        for (let i = 0; i < this.gotoArray.length; i++) {
            const gotoItem = this.gotoArray[i];
            if (gotoItem.msDelta == msDelta) {
                gotoItem.value = value;
                return false;
            }
        }
        const v = new GotoData(msDelta, value);
        this.gotoArray.push(v);
        return true;
    }
}

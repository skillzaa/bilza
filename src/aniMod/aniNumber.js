import GotoData from "./gotoData.js";
export default class AniNumber {
    constructor(initialValue = 0, minValue = 0, maxValue = 100) {
        this._value = initialValue;
        this.defaultValue = 0;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.gotoArray = [];
    }
    value(msDelta) {
        this._value = this.defaultValue;
        const baseGotoValue = this.getBaseGotoValue(msDelta);
        if (typeof baseGotoValue == "number") {
            this._value = baseGotoValue;
        }
        return this._value;
    }
    getBaseGotoValue(msDelta) {
        if (this.gotoArray.length < 1) {
            return null;
        }
        let frame = 0;
        let rez = null;
        for (let i = 0; i < this.gotoArray.length; i++) {
            const elm = this.gotoArray[i];
            if (msDelta >= (elm.msDelta)) {
                if ((elm.msDelta) >= frame) {
                    frame = (elm.msDelta);
                    rez = elm.value;
                }
            }
        }
        return rez;
    }
    set(n) {
        this._value = n;
        return this._value;
    }
    goto(msDelta, value = 0) {
        const v = new GotoData(msDelta, value);
        this.gotoArray.push(v);
    }
}

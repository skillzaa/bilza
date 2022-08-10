import GotoObj from "./gotoObj.js";
export default class AniProp {
    constructor(defaultValue) {
        this.gotoArray = [];
        this.effFilters = [];
        this.goto(0, defaultValue);
        this._value = defaultValue;
    }
    update(msDelta) {
        const baseGoto = this.getBaseGoto(msDelta);
        const animatedValue = baseGoto.getAnimatedValue(msDelta);
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
    getBaseGoto(msDelta) {
        if (this.gotoArray.length < 1) {
            throw new Error("BaseGoto not found");
        }
        let lastFrameChecked = 0;
        let rez = null;
        for (let i = 0; i < this.gotoArray.length; i++) {
            const elm = this.gotoArray[i];
            if (msDelta >= (elm.msDelta)) {
                if ((elm.msDelta) >= lastFrameChecked) {
                    lastFrameChecked = (elm.msDelta);
                    rez = elm;
                }
            }
        }
        if (rez == null) {
            throw new Error("BaseGoto not found");
        }
        return rez;
    }
    goto(msDelta, value) {
        for (let i = 0; i < this.gotoArray.length; i++) {
            const gotoItem = this.gotoArray[i];
            if (gotoItem.msDelta == msDelta) {
                gotoItem.value = value;
                return gotoItem;
            }
        }
        const v = new GotoObj(msDelta, value);
        this.gotoArray.push(v);
        return v;
    }
}

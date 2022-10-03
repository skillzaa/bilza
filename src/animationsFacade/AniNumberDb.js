import AniPropDb from "./AniPropDb.js";
export default class AniNumberDb extends AniPropDb {
    constructor(initialValue) {
        super(initialValue);
        this._isResp = false;
        this.theWhole = null;
    }
    init(theWhole) {
        this.theWhole = theWhole;
    }
    setResp(tf) {
        this._isResp = tf;
    }
    isResponsive() {
        return this._isResp;
    }
    value() {
        if (this._isResp == false) {
            return super.value();
        }
        else {
            return this.responsiveValue(super.value());
        }
    }
    valueRaw() {
        return super.value();
    }
    responsiveValue(perc) {
        if (this.theWhole == null) {
            throw new Error("init error");
        }
        return ((this.theWhole / 100) * perc);
    }
    animate(timeFrom, timeTo, xFrom, xTo) {
    }
}

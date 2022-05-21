export default class Constant {
    constructor(constant = 0) {
        this._constant = constant;
    }
    update(msDelta) {
        return true;
    }
    value() {
        return this._constant;
    }
}

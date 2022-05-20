export default class Adder {
    constructor(increment) {
        this.increment = increment;
        this.val = 0;
    }
    update(msDelta) {
        this.val = this.val + this.increment;
        return true;
    }
    value() {
        return this.val;
    }
}

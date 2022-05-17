export default class Adder {
    constructor(increment) {
        this.increment = increment;
        this.counter = 0;
    }
    value() {
        this.counter = this.counter + this.increment;
        return this.counter;
    }
}

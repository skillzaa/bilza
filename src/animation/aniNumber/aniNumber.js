import Increment from "./increment.js";
export default class AniNumber {
    constructor(initalValue) {
        this.INITALVALUE = initalValue;
        this.val = initalValue;
        this.animations = [];
    }
    update(msDelta) {
        if (this.animations.length < 1) {
            this.val = this.INITALVALUE;
        }
        for (let i = 0; i < this.animations.length; i++) {
            const ani = this.animations[i];
            ani.update(msDelta);
            this.val = ani.value();
        }
    }
    value() {
        return this.val;
    }
    increment() {
        let a = new Increment(0, 40, 0, 600);
        this.animations.push(a);
    }
}

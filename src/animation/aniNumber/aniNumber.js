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
            let v = ani.value();
            if (v != null) {
                this.val = v;
            }
        }
    }
    value() {
        return this.val;
    }
    increment() {
        let a = new Increment(5000, 15000, 0, 300);
        this.animations.push(a);
    }
}

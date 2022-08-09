import AniProp from "../aniProp/aniProp.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
import Vibrate from "./vibrate.js";
import RandomNo from "./randomNo.js";
import JumpBetween from "./jumpBetween.js";
import Oscillate from "./oscillate.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, minValue = 0, maxValue = 100) {
        super(initialValue);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    animate(msDeltaStart, msDeltaEnd, startValue, endValue) {
        if (startValue < endValue) {
            this.goto(msDeltaStart, startValue);
            this.goto(msDeltaEnd, endValue);
            let c = new Increment(msDeltaStart + 1, msDeltaEnd - 1, startValue, endValue);
            this.filters.push(c);
        }
        else if (startValue > endValue) {
            let c = new Decrement(msDeltaStart, msDeltaEnd, startValue, endValue);
            this.filters.push(c);
        }
    }
    vibrate(msDeltaStart, msDeltaEnd, offset = 10, delayInMilliSec = 100) {
        const v = new Vibrate(msDeltaStart, msDeltaEnd, offset, delayInMilliSec);
        this.filters.push(v);
    }
    random(msDeltaStart, msDeltaEnd, min = 0, max = 100, delayInMilliSec = 0) {
        const v = new RandomNo(msDeltaStart, msDeltaEnd, min, max, delayInMilliSec);
        this.filters.push(v);
    }
    jumpBetween(msDeltaStart, msDeltaEnd, pointOne = 1, pointTwo = 10, delayInMilliSec = 0) {
        const v = new JumpBetween(msDeltaStart, msDeltaEnd, pointOne, pointTwo, delayInMilliSec);
        this.filters.push(v);
    }
    oscillate(msDeltaStart, msDeltaEnd, startValue = 1, endValue = 10, speed = 1) {
        const v = new Oscillate(msDeltaStart, msDeltaEnd, startValue, endValue, speed);
        this.filters.push(v);
    }
}

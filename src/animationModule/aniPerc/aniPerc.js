import AniProp from "../aniProp/aniProp.js";
import Increment from "./aniFilters/increment.js";
import Decrement from "./aniFilters/decrement.js";
import RandomNo from "./aniFilters/randomNo.js";
import JumpBetween from "./aniFilters/jumpBetween.js";
import Oscillate from "./aniFilters/oscillate.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, responsive = false, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    animate(msDeltaStart, msDeltaEnd, startValue, endValue) {
        if (startValue < endValue) {
            const stGoto = super.goto(msDeltaStart, startValue);
            const endGoto = super.goto(msDeltaEnd, endValue);
            let c = new Increment(msDeltaStart, msDeltaEnd, startValue, endValue);
            stGoto.aniFilters.push(c);
        }
        else if (startValue > endValue) {
            const stGoto = super.goto(msDeltaStart, startValue);
            const endGoto = super.goto(msDeltaEnd, endValue);
            let c = new Decrement(msDeltaStart, msDeltaEnd, startValue, endValue);
            stGoto.aniFilters.push(c);
        }
    }
    random(msDeltaStart, msDeltaEnd, min = 0, max = 100, delayInMilliSec = 0) {
        const v = new RandomNo(msDeltaStart, msDeltaEnd, min, max, delayInMilliSec);
    }
    jumpBetween(msDeltaStart, msDeltaEnd, pointOne = 1, pointTwo = 10, delayInMilliSec = 0) {
        const v = new JumpBetween(msDeltaStart, msDeltaEnd, pointOne, pointTwo, delayInMilliSec);
    }
    oscillate(msDeltaStart, msDeltaEnd, startValue = 1, endValue = 10, speed = 1) {
        const v = new Oscillate(msDeltaStart, msDeltaEnd, startValue, endValue, speed);
    }
}

import AniProp from "../aniProp/aniProp.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
import Vibrate from "./vibrate.js";
import RandomNo from "./randomNo.js";
import JumpBetween from "./jumpBetween.js";
import Oscillate from "./oscillate.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, responsive = false, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.responsive = responsive;
        this.canvasWidthHeight = null;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    setResponsive(r) {
        this.responsive = r;
        return this.responsive;
    }
    init(canvasWidthHeight) {
        if (this.responsive == false) {
            console.error("this.responsive == false");
            return;
        }
        this.canvasWidthHeight = canvasWidthHeight;
        this.initSet();
        this.initGoto();
        for (let i = 0; i < this.filters.length; i++) {
            const fil = this.filters[i];
            fil.init(this.canvasWidthHeight);
        }
    }
    initGoto() {
        if (this.responsive == false) {
            return;
        }
        for (let i = 0; i < this.gotoArray.length; i++) {
            const elm = this.gotoArray[i];
            elm.value = this.percToPix(elm.value);
        }
    }
    initSet() {
        if (this.responsive == false) {
            return;
        }
        this._value = this.percToPix(this._value);
    }
    percToPix(perc) {
        if (this.canvasWidthHeight == null) {
            throw ("init error");
        }
        return ((this.canvasWidthHeight / 100) * perc);
    }
    animate(msDeltaStart, msDeltaEnd, startValue, endValue) {
        if (startValue < endValue) {
            super.goto(msDeltaStart, startValue);
            super.goto(msDeltaEnd, endValue);
            let c = new Increment(msDeltaStart, msDeltaEnd, startValue, endValue);
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

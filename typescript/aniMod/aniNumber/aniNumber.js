import AniProp from "../aniProp/aniProp.js";
import Increment from "./aniFilters/increment.js";
import Decrement from "./aniFilters/decrement.js";
import RandomNo from "./aniFilters/randomNo.js";
import JumpBetween from "./aniFilters/jumpBetween.js";
import Oscillate from "./aniFilters/oscillate.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, responsive = false, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.responsive = responsive;
        this.canvasWidthHeight = null;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    setResponsive(tf) {
        this.responsive = tf;
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

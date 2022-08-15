import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
import IdentityFil from "../filters/identityFil.js";
import Decrement from "./filters/decrement.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    animate(rTimeMsStart, rTimeMsEnd, startValue, endValue) {
        if (startValue < endValue) {
            let inc = new Increment(rTimeMsStart, rTimeMsEnd, startValue, endValue, 0);
            this.addFilter(inc);
            const stop = new IdentityFil(rTimeMsEnd, rTimeMsEnd + 100000, endValue, 0);
            this.addFilter(stop);
        }
        else if (startValue > endValue) {
            let dec = new Decrement(rTimeMsStart, rTimeMsEnd, startValue, endValue);
            this.addFilter(dec);
            const stop = new IdentityFil(rTimeMsEnd, rTimeMsEnd + 100000, endValue, 0);
            this.addFilter(stop);
        }
    }
    random(rTimeMsStart, rTimeMsEnd, min = 0, max = 100, delayInMilliSec = 0) {
    }
    oscillate(rTimeMsStart, rTimeMsEnd, startValue = 1, endValue = 10, secPerIter = 5000) {
        const timeDiff = rTimeMsEnd - rTimeMsStart;
        const endFil = new IdentityFil(rTimeMsEnd, rTimeMsEnd + 1000, endValue, 0);
        this.addFilter(endFil);
        const noOfIter = Math.floor(timeDiff / secPerIter);
        let finalNoOfIter;
        if (timeDiff % secPerIter == 0) {
            finalNoOfIter = noOfIter - 1;
        }
        else {
            finalNoOfIter = noOfIter;
        }
        let stratWithInc = (startValue < endValue) ? true : false;
        for (let i = 0; i < finalNoOfIter; i++) {
            if (stratWithInc == true) {
                stratWithInc = !stratWithInc;
                const thisStartTime = rTimeMsStart + (i * secPerIter);
                const thisEndTime = thisStartTime + secPerIter;
                let inc = new Increment(thisStartTime, thisEndTime, startValue, endValue);
                this.addFilter(inc);
            }
            else {
                stratWithInc = !stratWithInc;
                const thisStartTime = rTimeMsStart + (i * secPerIter);
                const thisEndTime = thisStartTime + secPerIter;
                let inc = new Decrement(thisStartTime, thisEndTime, endValue, startValue);
                this.addFilter(inc);
            }
        }
    }
    vibrate(rTimeMsStart, rTimeMsEnd, offset = 10, delayInMilliSec = 100) {
    }
}

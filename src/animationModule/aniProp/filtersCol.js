import BaseFilter from "../filters/baseFilter.js";
export default class FiltersCol {
    constructor() {
        this.filtersArr = [];
    }
    getBaseFilter(rTimeMs) {
        if (this.filtersArr.length < 1) {
            throw new Error("BaseGoto not found");
        }
        let lastFrameChecked = 0;
        let rez = null;
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (rTimeMs >= (fil.rTimeMsStart)) {
                if ((fil.rTimeMsStart) >= lastFrameChecked) {
                    lastFrameChecked = (fil.rTimeMsStart);
                    rez = fil;
                }
            }
        }
        if (rez == null) {
            throw new Error("BaseGoto not found");
        }
        return rez;
    }
    goto(rTimeMs, value) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.rTimeMsStart == rTimeMs) {
                fil.baseValue = value;
                return fil;
            }
        }
        const v = new BaseFilter(rTimeMs, rTimeMs + 1000, value, 0);
        this.addFilter(v);
        return v;
    }
    addFilter(bfil) {
        this.filtersArr.push(bfil);
    }
}

import BaseFilter from "../filters/baseFilter.js";
export default class FiltersCol {
    constructor() {
        this.filtersArr = [];
    }
    getBaseFilter(msDelta) {
        if (this.filtersArr.length < 1) {
            throw new Error("BaseGoto not found");
        }
        let lastFrameChecked = 0;
        let rez = null;
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (msDelta >= (fil.msDeltaStart)) {
                if ((fil.msDeltaStart) >= lastFrameChecked) {
                    lastFrameChecked = (fil.msDeltaStart);
                    rez = fil;
                }
            }
        }
        if (rez == null) {
            throw new Error("BaseGoto not found");
        }
        return rez;
    }
    goto(msDelta, value) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.msDeltaStart == msDelta) {
                fil.baseValue = value;
                return fil;
            }
        }
        const v = new BaseFilter(msDelta, msDelta + 1000, value, 0);
        this.filtersArr.push(v);
        return v;
    }
}

import AniProp from "../aniProp/aniProp.js";
import ConstantVal from "./filters/constantVal.js";
export default class AniString extends AniProp {
    constructor(initialValue = "") {
        super(initialValue);
    }
    goto(rTimeMs, value) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.rTimeMsStart == rTimeMs) {
                fil.baseValue = value;
                return true;
            }
        }
        const v = new ConstantVal(rTimeMs, rTimeMs + 1000, value, 0);
        this.addFilter(v);
        return false;
    }
}

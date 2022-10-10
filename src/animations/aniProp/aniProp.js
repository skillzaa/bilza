import BaseAniProp from "./baseAniProp.js";
export default class AniProp extends BaseAniProp {
    constructor(aniPropDb) {
        super(aniPropDb.getBaseValue());
        this.filtersArr = aniPropDb.getFiltersArray();
    }
    update(rTimeMs) {
        const baseGoto = this.getBaseFilter(rTimeMs);
        if (baseGoto == null) {
            return false;
        }
        else {
            baseGoto.update(rTimeMs);
            this.setFilterValue(baseGoto.filterValue());
        }
        return true;
    }
    getBaseFilter(rTimeMs) {
        if (this.filtersArr.length < 1) {
            return null;
        }
        let lastFrameChecked = 0;
        let rez = null;
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (rTimeMs >= (fil.startTimeMs)) {
                if ((fil.startTimeMs) >= lastFrameChecked) {
                    lastFrameChecked = (fil.startTimeMs);
                    rez = fil;
                }
            }
        }
        return rez;
    }
}

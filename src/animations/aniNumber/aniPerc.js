import AniProp from "../aniProp/aniProp.js";
export default class AniPerc extends AniProp {
    constructor(aniPercDb) {
        super(aniPercDb);
        this.defaultValue = aniPercDb.valuePerc();
        this.theWhole = aniPercDb.getTheWhole();
    }
    value() {
        return this.responsiveValue(super.value());
    }
    valuePerc() {
        return super.value();
    }
    responsiveValue(perc) {
        if (this.theWhole == null) {
            throw new Error("init error");
        }
        return ((this.theWhole / 100) * perc);
    }
}

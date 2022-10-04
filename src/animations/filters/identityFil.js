import BaseFilter from "./baseFilter.js";
export default class IdentityFil extends BaseFilter {
    constructor(startTimeMs, endTimeMs, staticValue) {
        super(startTimeMs, endTimeMs, staticValue, staticValue);
        this.setAfterValue(this.getEndValue());
    }
}

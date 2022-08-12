import BaseFilter from "../baseNumberFilter.js";
export default class ConstantNo extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, constantValue) {
        super(rTimeMsStart, rTimeMsEnd);
        this.constantValue = constantValue;
    }
    value() {
        return this.constantValue;
    }
}

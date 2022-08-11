import BaseFilter from "../baseNumberFilter.js";
export default class ConstantNo extends BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, constantValue) {
        super(msDeltaStart, msDeltaEnd);
        this.constantValue = constantValue;
    }
    value() {
        return this.constantValue;
    }
}

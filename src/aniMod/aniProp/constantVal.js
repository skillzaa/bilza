export default class ConstantNo {
    constructor(msDeltaStart, msDeltaEnd, constantValue) {
        super(msDeltaStart, msDeltaEnd);
        this.constantValue = constantValue;
    }
    value() {
        return this.constantValue;
    }
}

export default class AnimationObj {
    constructor(msDeltaStart, msDeltaEnd, baseValue, filter) {
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
        this.baseValue = baseValue;
        this.filter = filter;
    }
    animatedValue(msDelta) {
        this.filter.update(msDelta, this.baseValue);
        let v = this.filter.animatedValue();
        if (v != null) {
            return v;
        }
        else {
            return this.baseValue;
        }
    }
}

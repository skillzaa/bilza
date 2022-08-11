import BaseFilter from "./baseFilter";
export default class AnimationObj<T> {
    msDeltaStart: number;
    msDeltaEnd: number;
    baseValue: T;
    filter: BaseFilter<T>;
    constructor(msDeltaStart: number, msDeltaEnd: number, baseValue: T, filter: BaseFilter<T>);
    animatedValue(msDelta: number): T;
}
//# sourceMappingURL=animationObj.d.ts.map
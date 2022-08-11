import AnimationObj from "./animationObj";
export default class AniObjCol<T> {
    private filtersArr;
    constructor();
    protected getBaseAniObj(msDelta: number): AnimationObj<T>;
    goto(msDelta: number, value: T): AnimationObj<T>;
}
//# sourceMappingURL=filters.d.ts.map
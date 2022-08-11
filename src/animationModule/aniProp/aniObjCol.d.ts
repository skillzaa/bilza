import AnimationObj from "./animationObj";
export default class AniObjCol<T> {
    private aniObjArr;
    constructor();
    protected getBaseAniObj(msDelta: number): AnimationObj<T>;
    goto(msDelta: number, value: T): AnimationObj<T>;
}
//# sourceMappingURL=aniObjCol.d.ts.map
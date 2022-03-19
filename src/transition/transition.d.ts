import IFrameStart from "./IFrameStart.js";
export default class Transition<T extends IFrameStart> {
    private newDataObjFn;
    data: T;
    private transitions;
    constructor(newDataObjFn: () => T);
    /** Why is there an error ?
     * ans: since i am making this for transition array which will have only some of the elms and not all rest are marked as null, so that both the arrays merge.
     * Better Ans: this array should have just those items which have been used and not a long list of nulls, this is a design error.
     */
    add(frameStart: number): T;
    insert(f: T): T;
    /**Keep in mind that when we apply some frame all the frames before that are deleted, since they have elapsed */
    apply(frame: number): void;
    private merge;
}
//# sourceMappingURL=transition.d.ts.map
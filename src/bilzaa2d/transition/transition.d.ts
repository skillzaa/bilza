import IFrameStart from "./IFrameStart.js";
export default class Transition<T extends IFrameStart> {
    private newDataObjFn;
    data: T;
    private transitions;
    constructor(newDataObjFn: () => T);
    add(frameStart: number): T;
    insert(f: T): T;
    /**Keep in mind that when we apply some frame all the frames before that are deleted, since they have elapsed */
    apply(frame: number): void;
    private merge;
}
//# sourceMappingURL=transition.d.ts.map
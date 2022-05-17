import IMsStart from "../../design/IMsStart.js";
export default class Transition<T extends IMsStart> {
    private newDataObjFn;
    data: T;
    private transitions;
    constructor(newDataObjFn: () => T);
    add(msStart: number): T;
    insert(f: T): T;
    apply(msDelta: number): void;
    private merge;
}
//# sourceMappingURL=transition.d.ts.map
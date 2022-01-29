import State from "./state.js";
import Frac from "../frac/frac.js";
import IDrawable from "../design/IDrawable.js";
export default class SegFactory {
    private state;
    private add_new_seg_fn;
    constructor(state: State, add_new_seg_fn: (segment: IDrawable) => IDrawable);
    lineSeg(): any;
    frac(): Frac;
}
//# sourceMappingURL=segFactory.d.ts.map
import LineSeg from "../lineSeg/lineSeg.js";
import Frac from "../frac/frac.js";
export default class SegFactory {
    constructor(state, add_new_seg_fn) {
        this.state = state;
        this.add_new_seg_fn = add_new_seg_fn;
    }
    lineSeg() {
        let i = new LineSeg(this.state);
        this.add_new_seg_fn(i);
        return i;
    }
    frac() {
        let i = new Frac(this.state);
        this.add_new_seg_fn(i);
        return i;
    }
}

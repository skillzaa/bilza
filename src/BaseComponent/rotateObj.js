import Loc from "./loc.js";
export default class RotateObj extends Loc {
    constructor() {
        super();
        this.rotation = 20;
    }
    applyRotation(p) {
        p.save();
        p.translate(this.xAligned(), this.yAligned());
        p.rotate(this.rotation);
    }
    removeRotation(p) {
        p.restore();
    }
}

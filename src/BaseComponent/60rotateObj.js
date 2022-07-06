import Loc from "./70loc.js";
export default class RotateObj extends Loc {
    constructor() {
        super();
    }
    applyRotation(p) {
        p.save();
        p.translate(this.xRotateAligned(), this.yRotateAligned());
        p.rotate(this.rotation.value());
        p.translate(-this.xRotateAligned(), -this.yRotateAligned());
    }
    removeRotation(p) {
        p.restore();
    }
}

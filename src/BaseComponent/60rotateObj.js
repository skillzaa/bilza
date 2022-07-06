import { AniNumber } from "../Bilza.js";
import Loc from "./70loc.js";
export default class RotateObj extends Loc {
    constructor() {
        super();
        this.rotation = new AniNumber(0);
    }
    applyRotation(p) {
        p.save();
        p.translate(this.xAligned(), this.yAligned());
        p.rotate(this.rotation.value());
        console.log("this.rotation.value()", this.rotation.value());
    }
    removeRotation(p) {
        p.restore();
    }
}

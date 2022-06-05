import { XAlignment, YAlignment } from "./Bilza.js";
export default class AniPre {
    constructor() {
    }
    static LinStop(comp, fromSec = 0, toSec = 4, xUpto = 100, y = 0) {
        comp.loc.goto(fromSec, 0, y, XAlignment.Right, YAlignment.Top);
        comp.loc.animate(fromSec, toSec, 0, xUpto, y, y, XAlignment.Right, XAlignment.Right);
    }
}

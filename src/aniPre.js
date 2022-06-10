import { XAlignment, YAlignment, OffScreenYOpt } from "./Bilza.js";
export default class AniPre {
    constructor() {
    }
    static LinStop(comp, fromSec = 0, toSec = 4, y = 0, xUpto = 50) {
        comp.animate(fromSec, toSec, comp.offScreenXOpt.XLeft, xUpto, y, y, XAlignment.Right, XAlignment.Right);
    }
    static TinStop(comp, fromSec = 0, toSec = 4, x = 0, yUpto = 90) {
        comp.goto(fromSec, x, OffScreenYOpt.YTop, XAlignment.Mid, YAlignment.Top);
        comp.animate(fromSec, toSec, x, x, OffScreenYOpt.YTop, yUpto, XAlignment.Mid, XAlignment.Mid);
    }
    static LinRout(comp, fromSec = 0, toSec = 4, y = 0) {
        comp.goto(fromSec, 0, y, XAlignment.Right, YAlignment.Top);
        comp.animate(fromSec, toSec, 0, 100, y, y, XAlignment.Right, XAlignment.Left);
    }
    static TinBout(comp, fromSec = 0, toSec = 4, x = 50) {
        comp.goto(fromSec, x, OffScreenYOpt.YTop, XAlignment.Mid, YAlignment.Top);
        comp.animate(fromSec, toSec, x, x, OffScreenYOpt.YTop, OffScreenYOpt.YBot, XAlignment.Mid, XAlignment.Mid);
    }
}

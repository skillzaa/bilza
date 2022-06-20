import { XAlignment, YAlignment, OffScreenYOpt, OffScreenXOpt } from "../Bilza.js";
export default class AniTempl {
    static TinStop(comp, fromSec = 0, toSec = 4, x = 0, yUpto = 90, xAlign = XAlignment.Mid, yAlign = YAlignment.Top) {
        comp.goto(fromSec, x, OffScreenYOpt.YTop, xAlign, yAlign);
        comp.animate(fromSec, toSec, x, x, OffScreenYOpt.YTop, yUpto, xAlign, xAlign, yAlign, yAlign);
    }
    static TinBout(comp, fromSec = 0, toSec = 4, x = 50) {
        comp.goto(fromSec, x, OffScreenYOpt.YTop, XAlignment.Mid, YAlignment.Top);
        comp.animate(fromSec, toSec, x, x, OffScreenYOpt.YTop, OffScreenYOpt.YBot, XAlignment.Mid, XAlignment.Mid);
    }
    static RinStop(comp, fromSec = 0, toSec = 4, xUpto, y = 50) {
        comp.goto(0, comp.offScreenXOpt.XRight, y);
        comp.animate(fromSec, toSec, OffScreenXOpt.XRight, xUpto, y, y, XAlignment.Right, XAlignment.Mid);
    }
    static RinLout(comp, fromSec = 0, toSec = 4, y = 50) {
        comp.goto(0, comp.offScreenXOpt.XRight, y);
        comp.animate(fromSec, toSec, OffScreenXOpt.XRight, OffScreenXOpt.XLeft, y, y, XAlignment.Right, XAlignment.Mid);
    }
    static LinStop(comp, fromSec = 0, toSec = 4, xUpto, y = 50) {
        comp.goto(0, comp.offScreenXOpt.XLeft, y);
        comp.animate(fromSec, toSec, comp.offScreenXOpt.XLeft, xUpto, y, y, XAlignment.Right, XAlignment.Mid);
    }
    static LinRout(comp, fromSec = 0, toSec = 4, y = 50) {
        comp.goto(0, comp.offScreenXOpt.XLeft, y);
        comp.animate(fromSec, toSec, comp.offScreenXOpt.XLeft, comp.offScreenXOpt.XRight, y, y, XAlignment.Right, XAlignment.Mid);
    }
    static BinTout(comp, fromSec = 0, toSec = 4, x = 50) {
        comp.goto(0, x, comp.offScreenYOpt.YBot, XAlignment.Mid, YAlignment.Top);
        comp.animate(fromSec, toSec, x, x, comp.offScreenYOpt.YBot, comp.offScreenYOpt.YTop, XAlignment.Mid, XAlignment.Mid, YAlignment.Top, YAlignment.Top);
    }
    static BinStop(comp, fromSec = 0, toSec = 4, x = 50, yUpto = 50) {
        comp.goto(0, x, comp.offScreenYOpt.YBot, XAlignment.Mid, YAlignment.Top);
        comp.animate(fromSec, toSec, x, x, comp.offScreenYOpt.YBot, yUpto, XAlignment.Mid, XAlignment.Mid, YAlignment.Top, YAlignment.Top);
    }
}

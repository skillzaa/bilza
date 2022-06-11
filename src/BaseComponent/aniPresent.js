import { XAlignment, YAlignment, OffScreenYOpt, OffScreenXOpt } from "../Bilza.js";
export default class AniPresent {
    constructor(comp) {
        this.comp = comp;
    }
    TinStop(comp, fromSec = 0, toSec = 4, x = 0, yUpto = 90, xAlign = XAlignment.Mid, yAlign = YAlignment.Top) {
        this.comp.goto(fromSec, x, OffScreenYOpt.YTop, xAlign, yAlign);
        this.comp.animate(fromSec, toSec, x, x, OffScreenYOpt.YTop, yUpto, xAlign, xAlign, yAlign, yAlign);
    }
    TinBout(comp, fromSec = 0, toSec = 4, x = 50) {
        this.comp.goto(fromSec, x, OffScreenYOpt.YTop, XAlignment.Mid, YAlignment.Top);
        this.comp.animate(fromSec, toSec, x, x, OffScreenYOpt.YTop, OffScreenYOpt.YBot, XAlignment.Mid, XAlignment.Mid);
    }
    RinStop(comp, fromSec = 0, toSec = 4, xUpto, y = 50) {
        this.comp.goto(0, this.comp.offScreenXOpt.XRight, y);
        this.comp.animate(fromSec, toSec, OffScreenXOpt.XRight, xUpto, y, y, XAlignment.Right, XAlignment.Mid);
    }
    RinLout(comp, fromSec = 0, toSec = 4, y = 50) {
        this.comp.goto(0, this.comp.offScreenXOpt.XRight, y);
        this.comp.animate(fromSec, toSec, OffScreenXOpt.XRight, OffScreenXOpt.XLeft, y, y, XAlignment.Right, XAlignment.Mid);
    }
    LinStop(comp, fromSec = 0, toSec = 4, xUpto, y = 50) {
        this.comp.goto(0, this.comp.offScreenXOpt.XLeft, y);
        this.comp.animate(fromSec, toSec, this.comp.offScreenXOpt.XLeft, xUpto, y, y, XAlignment.Right, XAlignment.Mid);
    }
    LinRout(comp, fromSec = 0, toSec = 4, y = 50) {
        this.comp.goto(0, this.comp.offScreenXOpt.XLeft, y);
        this.comp.animate(fromSec, toSec, this.comp.offScreenXOpt.XLeft, this.comp.offScreenXOpt.XRight, y, y, XAlignment.Right, XAlignment.Mid);
    }
    BinTout(comp, fromSec = 0, toSec = 4, x = 50) {
        this.comp.goto(0, x, this.comp.offScreenYOpt.YBot, XAlignment.Mid, YAlignment.Top);
        this.comp.animate(fromSec, toSec, x, x, this.comp.offScreenYOpt.YBot, this.comp.offScreenYOpt.YTop, XAlignment.Mid, XAlignment.Mid, YAlignment.Top, YAlignment.Top);
    }
    BinStop(comp, fromSec = 0, toSec = 4, x = 50, yUpto = 50) {
        this.comp.goto(0, x, this.comp.offScreenYOpt.YBot, XAlignment.Mid, YAlignment.Top);
        this.comp.animate(fromSec, toSec, x, x, this.comp.offScreenYOpt.YBot, yUpto, XAlignment.Mid, XAlignment.Mid, YAlignment.Top, YAlignment.Top);
    }
}

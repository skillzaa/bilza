import WidthHeight from "./71WidthHeight.js";
import X from "./xy/x.js";
import Y from "./xy/y.js";
export default class Loc extends WidthHeight {
    constructor() {
        super();
        this.x = new X();
        this.y = new Y();
        this.charsWidth = null;
    }
    draw(p) {
        return true;
    }
    random(startTimeSec, endTimeSec, Xmin = 1, Xmax = 100, Ymin = 1, Ymax = 100, skipXFrames = 60) {
        this.x.random(startTimeSec, endTimeSec, Xmin, Xmax, skipXFrames);
        this.y.random(startTimeSec, endTimeSec, Ymin, Ymax, skipXFrames);
    }
    vibrate(from, to, x, y, offset, delay) {
        this.x.vibrate(from, to, x, offset, delay);
        this.y.vibrate(from, to, y, offset, delay);
    }
    goto(atFrame, x, y) {
        this.x.goto(atFrame, x);
        this.y.goto(atFrame, y);
        return true;
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo) {
        this.x.animate(timeFrom, timeTo, xFrom, xTo);
        this.y.animate(timeFrom, timeTo, yFrom, yTo);
        return true;
    }
    xAligned() {
        return this.x.aligned(this.widthInPix());
    }
    yAligned() {
        return this.y.aligned(this.heightInPix());
    }
}

import Shadow from "./80Shadow.js";
import X from "./xy/x.js";
import Y from "./xy/y.js";
export default class Loc extends Shadow {
    constructor() {
        super();
        this.x = new X();
        this.y = new Y();
        this.charsWidth = null;
    }
    init(p) {
        this.canvasWidth = p.canvasWidth();
        this.canvasHeight = p.canvasHeight();
        this.x.init(this.usePercentages, this.canvasWidth);
        this.y.init(this.usePercentages, this.canvasHeight);
        return true;
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    update(msDelta, p) {
        this.x.update(msDelta);
        this.y.update(msDelta);
        return true;
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
        return this.x.aligned(this.width());
    }
    yAligned() {
        return this.y.aligned(this.height());
    }
}

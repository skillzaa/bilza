import BaseComponentBase from "./BaseComponentBase.js";
import X from "./x.js";
import Y from "./y.js";
export default class Loc extends BaseComponentBase {
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
        return true;
    }
    draw(p) {
        return true;
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

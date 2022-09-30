import CoreProps from "./coreProps.js";
import Style from "../design/style.js";
export default class Component extends CoreProps {
    constructor() {
        super();
        this.style = new Style();
    }
    update(msDelta, p) {
        return true;
    }
    draw(p) {
        return true;
    }
    goto(atFrame, x, y) {
        return true;
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo) {
        return true;
    }
    getStartTime(inSec) {
        return 0;
    }
    getEndTime(inSec) {
        return 60;
    }
    preDraw(p) {
    }
    postDraw(p) {
    }
    contentX() { return 0; }
    contentY() { return 0; }
}

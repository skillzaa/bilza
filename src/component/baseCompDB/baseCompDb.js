import CoreProps from "./coreProps.js";
import Alignment from "./alignment.js";
export default class ComponentDb extends CoreProps {
    constructor(startTime, endTime, canvasWidth, canvasHeight, insertAction) {
        super();
        this.startTime = startTime;
        this.endTime = endTime;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvasHeight = canvasHeight;
        this.insertAction = insertAction;
        this.alignObj = new Alignment(0, 0);
        this.alignRotateObj = new Alignment(0, 0);
    }
    align(x, y) {
    }
    alignRotate(x, y) {
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo) {
        this.x.animate(timeFrom, timeTo, xFrom, xTo);
        this.y.animate(timeFrom, timeTo, yFrom, yTo);
        return true;
    }
    compWidth() {
        return 3;
    }
    compWidthPix() {
        return 3;
    }
    compHeight() {
        return 3;
    }
    compHeightPix() {
        return 3;
    }
    contentWidth() {
        return 3;
    }
    contentWidthPix() {
        return 3;
    }
    contentHeight() {
        return 3;
    }
    contentHeightPix() {
        return 3;
    }
    getDuration() {
        return 3;
    }
    getStartTime(inMilliSec) {
        return this.startTime;
    }
    getEndTime(inMilliSec) {
        return this.endTime;
    }
    goto(atFrame, x, y) {
        return true;
    }
}

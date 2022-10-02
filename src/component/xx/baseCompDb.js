import CoreProps from "./coreProps.js.js";
export default class ComponentDb extends CoreProps {
    constructor(startTime, endTime, canvasWidth, canvasHeight, insertAction) {
        super();
        this.xAlign = 0;
        this.yAlign = 0;
        this.xRotate = 0;
        this.yRotate = 0;
        this.startTime = startTime;
        this.endTime = endTime;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvasHeight = canvasHeight;
        this.insertAction = insertAction;
    }
    align(x = null, y = null) {
        if (x !== null) {
            this.xAlign = x;
        }
        if (y !== null) {
            this.yAlign = y;
        }
    }
    alignRotate(x = null, y = null) {
        if (x !== null) {
            this.xRotate = x;
        }
        if (y !== null) {
            this.yRotate = y;
        }
    }
    xRotateAligned() {
        let x = this.xAligned();
        switch (this.xRotate) {
            case 0:
                break;
            case 1:
                x = x + (this.compWidth() / 2);
                break;
            case 2:
                x = x + this.compWidth();
                break;
        }
        return x;
    }
    yRotateAligned() {
        let y = this.yAligned();
        switch (this.yRotate) {
            case 0:
                break;
            case 1:
                y = y - (this.compHeight() / 2);
                break;
            case 2:
                y = y - this.compHeight();
                break;
        }
        return y;
    }
    xAligned() {
        let x = this.x.value();
        switch (this.xAlign) {
            case 0:
                break;
            case 1:
                x = x - (this.compWidth() / 2);
                break;
            case 2:
                x = x - this.compWidth();
                break;
        }
        return x;
    }
    yAligned() {
        let y = this.y.value();
        switch (this.yAlign) {
            case 0:
                break;
            case 1:
                y = y - (this.compHeight() / 2);
                break;
            case 2:
                y = y - this.compHeight();
                break;
        }
        return y;
    }
    setPaddings(n) {
        this.paddingLeft.set(n);
        this.paddingRight.set(n);
        this.paddingTop.set(n);
        this.paddingBottom.set(n);
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo) {
        this.x.animate(timeFrom, timeTo, xFrom, xTo);
        this.y.animate(timeFrom, timeTo, yFrom, yTo);
        return true;
    }
    compWidth() {
        return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value();
    }
    compHeight() {
        return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value();
    }
    contentHeight() {
        return this.height.value();
    }
    contentWidth() {
        return this.width.value();
    }
    compWidthPix() {
        return 3;
    }
    compHeightPix() {
        return 3;
    }
    contentWidthPix() {
        return 3;
    }
    contentHeightPix() {
        return 3;
    }
    getDuration() {
        return 3;
    }
    setxy(x, y = null) {
        if (y == null) {
            y = x;
        }
        this.x.set(x);
        this.y.set(y);
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

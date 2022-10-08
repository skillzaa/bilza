import CoreProps from "./corePropsDb.js";
export default class CompDb extends CoreProps {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
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
        return this.contentWidth() + this.paddingLeft.valuePerc() + this.paddingRight.valuePerc();
    }
    compHeight() {
        return this.contentHeight() + this.paddingTop.valuePerc() + this.paddingBottom.valuePerc();
    }
    contentHeight() {
        return this.height.valuePerc();
    }
    contentWidth() {
        return this.width.valuePerc();
    }
    getDuration() {
        return this.endTime - this.startTime;
    }
    goto(atFrame, x, y) {
        this.x.goto(atFrame, x);
        this.y.goto(atFrame, y);
        return true;
    }
    setxy(x, y = null) {
        if (y == null) {
            y = x;
        }
        this.x.set(x);
        this.y.set(y);
    }
    getStartTime(inSec = true) {
        return inSec ? this.startTime : (this.startTime * 1000);
    }
    getEndTime(inSec = true) {
        return inSec ? this.endTime : (this.endTime * 1000);
    }
    rightEdge() {
        let x = 100;
        switch (this.xAlign) {
            case 0:
                x = x - this.compWidth();
                break;
            case 1:
                x = x - (this.compWidth() / 2);
                break;
            case 2:
                break;
        }
        return x;
    }
    bottomEdge() {
        let x = 100;
        switch (this.yAlign) {
            case 0:
                x = x - this.compHeight();
                break;
            case 1:
                x = x - (this.compHeight() / 2);
                break;
            case 2:
                break;
        }
        return x;
    }
    getEngineComp(pack) { }
}

import CoreProps from "./corePropsDb.js";
export default class CompDb extends CoreProps {
    constructor(startTime, endTime, insertAction) {
        super(startTime, endTime, insertAction);
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
    getDuration() {
        return this.endTime - this.startTime;
    }
    goto(atFrame, x, y) {
        this.x.goto(atFrame, x);
        this.y.goto(atFrame, y);
        return true;
    }
    setxy(x, y) {
        this.x.set(x);
        this.y.set(y);
    }
    getStartTime(inSec = true) {
        return inSec ? this.startTime : (this.startTime * 1000);
    }
    getEndTime(inSec = true) {
        return inSec ? this.endTime : (this.endTime * 1000);
    }
    setRespLoc(tf) {
        this.x.setResp(tf);
        this.y.setResp(tf);
        return tf;
    }
    setRespDims(tf) {
        this.width.setResp(tf);
        this.paddingLeft.setResp(tf);
        this.paddingRight.setResp(tf);
        this.height.setResp(tf);
        this.paddingTop.setResp(tf);
        this.paddingBottom.setResp(tf);
        return tf;
    }
}

import WidthHeight from "./71WidthHeight.js";
export default class Loc extends WidthHeight {
    constructor() {
        super();
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
        let x = this.x.value();
        switch (this.xAlign) {
            case this.XAlignOpt.Left:
                break;
            case this.XAlignOpt.Mid:
                x = x - (this.compWidth() / 2);
                break;
            case this.XAlignOpt.Right:
                x = x - this.compWidth();
                break;
        }
        return x;
    }
    yAligned() {
        let y = this.y.value();
        switch (this.yAlign) {
            case this.YAlignOpt.Top:
                break;
            case this.YAlignOpt.Mid:
                y = y - (this.compHeight() / 2);
                break;
            case this.YAlignOpt.Bot:
                y = y - this.compHeight();
                break;
        }
        return y;
    }
    xRotateAligned() {
        let x = this.xAligned();
        switch (this.xRotate) {
            case this.XAlignOpt.Left:
                break;
            case this.XAlignOpt.Mid:
                x = x + (this.compWidth() / 2);
                break;
            case this.XAlignOpt.Right:
                x = x + this.compWidth();
                break;
        }
        return x;
    }
    yRotateAligned() {
        let y = this.yAligned();
        switch (this.yRotate) {
            case this.YAlignOpt.Top:
                break;
            case this.YAlignOpt.Mid:
                y = y + (this.compHeight() / 2);
                break;
            case this.YAlignOpt.Bot:
                y = y + this.compHeight();
                break;
        }
        return y;
    }
}

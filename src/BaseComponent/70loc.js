import WidthHeight from "./71WidthHeight.js";
import { XAlignOpt } from "./designBC/xAlignOpt.js";
import { YAlignOpt } from "./designBC/yAlignOpt.js";
export default class Loc extends WidthHeight {
    constructor() {
        super();
        this.charsWidth = null;
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
    align(x = null, y = null) {
        switch (x) {
            case 0:
                this.xAlign = XAlignOpt.Left;
                break;
            case 1:
                this.xAlign = XAlignOpt.Mid;
                break;
            case 2:
                this.xAlign = XAlignOpt.Right;
                break;
        }
        switch (y) {
            case 0:
                this.yAlign = YAlignOpt.Top;
                break;
            case 1:
                this.yAlign = YAlignOpt.Mid;
                break;
            case 2:
                this.yAlign = YAlignOpt.Bot;
                break;
        }
    }
    alignRotate(x = null, y = null) {
        switch (x) {
            case 0:
                this.xRotate = XAlignOpt.Left;
                break;
            case 1:
                this.xRotate = XAlignOpt.Mid;
                break;
            case 2:
                this.xRotate = XAlignOpt.Right;
                break;
        }
        switch (y) {
            case 0:
                this.yRotate = YAlignOpt.Top;
                break;
            case 1:
                this.yRotate = YAlignOpt.Mid;
                break;
            case 2:
                this.yRotate = YAlignOpt.Bot;
                break;
        }
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

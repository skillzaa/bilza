import RotateObj from "./60rotateObj.js";
import EntryAni from "../templates/entryAni.js";
import ExitAni from "../templates/exitAni.js";
export default class BaseComponent extends RotateObj {
    constructor() {
        super();
        this._canvasWidth = null;
        this._canvasHeight = null;
        this.entryAni = new EntryAni(this);
        this.exitAni = new ExitAni(this);
    }
    init(p) {
        this._canvasWidth = p.canvasWidth();
        this._canvasHeight = p.canvasHeight();
        this.width.init(this.canvasWidth());
        this.height.init(this.canvasHeight());
        this.x.init(this.canvasWidth());
        this.y.init(this.canvasHeight());
        this.paddingLeft.init(this.canvasWidth());
        this.paddingRight.init(this.canvasWidth());
        this.paddingTop.init(this.canvasHeight());
        this.paddingBottom.init(this.canvasHeight());
        return true;
    }
    update(msDelta, p) {
        this.color.update(msDelta);
        this.x.update(msDelta);
        this.y.update(msDelta);
        this.visible.update(msDelta);
        this.rotation.update(msDelta);
        this.opacity.update(msDelta);
        this.width.update(msDelta);
        this.height.update(msDelta);
        this.paddingLeft.update(msDelta);
        this.paddingRight.update(msDelta);
        this.paddingTop.update(msDelta);
        this.paddingBottom.update(msDelta);
        this.border.update(msDelta);
        this.colorBackground.update(msDelta);
        this.colorBorder.update(msDelta);
        return true;
    }
    drawBackground(p) {
        if (this.showBackground.value() == false) {
            return;
        }
        this.style.fillStyle = this.colorBackground.value();
        this.style.strokeStyle = this.colorBackground.value();
        p.drawFillRect(this.xAligned(), this.yAligned(), this.compWidth(), this.compHeight(), this.style);
    }
    drawBorder(p) {
        if (this.border.value() < 1) {
            return;
        }
        this.style.strokeStyle = this.colorBorder.value();
        this.style.fillStyle = this.colorBorder.value();
        this.style.lineWidth = this.border.value();
        p.drawRect((this.xAligned() - Math.floor(this.border.value() / 2)), (this.yAligned() - Math.floor(this.border.value() / 2)), this.compWidth() + Math.floor(this.border.value() - 1), this.compHeight() + Math.floor(this.border.value() - 1), this.style);
    }
    drawContentAreaBorder(p) {
        if (this.borderContentArea.value() < 1) {
            return;
        }
        this.style.strokeStyle = this.colorContentAreaBorder.value();
        this.style.fillStyle = this.colorContentAreaBorder.value();
        this.style.lineWidth = this.borderContentArea.value();
        p.drawRect((this.contentX() - Math.floor(this.borderContentArea.value() / 2)), (this.contentY() - Math.floor(this.borderContentArea.value() / 2)), this.contentWidth() + Math.floor(this.borderContentArea.value() - 1), this.contentHeight() + Math.floor(this.borderContentArea.value() - 1), this.style);
    }
    preDraw(p) {
        this.style.opacity = (this.opacity.value());
        this.applyRotation(p);
        this.drawBackground(p);
        this.drawBorder(p);
    }
    preDrawNonBoxed(p) {
        this.style.opacity = (this.opacity.value());
        this.applyRotation(p);
    }
    postDraw(p) {
        this.style.opacity = 100;
        this.removeRotation(p);
    }
    contentY() {
        return this.yAligned() + this.paddingTop.value();
    }
    contentX() {
        return this.xAligned() + this.paddingLeft.value();
    }
    setPaddings(n) {
        this.paddingLeft.set(n);
        this.paddingRight.set(n);
        this.paddingTop.set(n);
        this.paddingBottom.set(n);
    }
    setxy(x, y = null) {
        if (y == null) {
            y = x;
        }
        this.x.set(x);
        this.y.set(y);
    }
    canvasHeight() {
        if (this._canvasHeight == null) {
            throw new Error("the lib may not be initiailzed yet");
        }
        return this._canvasHeight;
    }
    canvasWidth() {
        if (this._canvasWidth == null) {
            throw new Error("the lib may not be initiailzed yet");
        }
        return this._canvasWidth;
    }
    setRespPadding(tf = false) {
        if (tf == true) {
            this.paddingLeft.setResponsive();
            this.paddingRight.setResponsive();
            this.paddingTop.setResponsive();
            this.paddingBottom.setResponsive();
            return true;
        }
        else {
            this.paddingLeft.setNonResponsive();
            this.paddingRight.setNonResponsive();
            this.paddingTop.setNonResponsive();
            this.paddingBottom.setNonResponsive();
            return false;
        }
    }
    setRespLoc(tf = true) {
        if (tf == true) {
            this.x.setResponsive();
            this.y.setResponsive();
            return true;
        }
        else {
            this.x.setNonResponsive();
            this.y.setNonResponsive();
            return false;
        }
    }
    setRespDims(tf = true) {
        if (tf == true) {
            this.width.setResponsive();
            this.height.setResponsive();
            return true;
        }
        else {
            this.width.setNonResponsive();
            this.height.setNonResponsive();
            return false;
        }
    }
}

import RotateObj from "./60rotateObj.js";
export default class BaseComponent extends RotateObj {
    constructor() {
        super();
    }
    init(p) {
        this.canvasWidth = p.canvasWidth();
        this.canvasHeight = p.canvasHeight();
        this.x.init(this.responsive, this.canvasWidth);
        this.y.init(this.responsive, this.canvasHeight);
        this.paddingLeft.init(this.responsive, this.canvasWidth);
        this.paddingRight.init(this.responsive, this.canvasWidth);
        this.paddingTop.init(this.responsive, this.canvasHeight);
        this.paddingBottom.init(this.responsive, this.canvasHeight);
        return true;
    }
    update(msDelta, p) {
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
        p.drawRect((this.xAligned() - Math.floor(this.border.value() / 2)), (this.yAligned() - Math.floor(this.border.value() / 2)), this.compWidth() + (this.border.value() - 1), this.compHeight() + (this.border.value() - 1), this.style);
    }
    preDraw(p) {
        this.style.opacity = (this.opacity.value());
        this.applyRotation(p);
        this.drawBackground(p);
        this.drawBorder(p);
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
}

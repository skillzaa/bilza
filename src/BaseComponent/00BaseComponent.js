import RotateObj from "./60rotateObj.js";
export default class BaseComponent extends RotateObj {
    constructor() {
        super();
    }
    init(p) {
        this.canvasWidth = p.canvasWidth();
        this.canvasHeight = p.canvasHeight();
        this.x.init(this.usePercentages, this.canvasWidth);
        this.y.init(this.usePercentages, this.canvasHeight);
        this.paddingLeft.init(this.usePercentages, this.canvasWidth);
        this.paddingRight.init(this.usePercentages, this.canvasWidth);
        this.paddingTop.init(this.usePercentages, this.canvasHeight);
        this.paddingBottom.init(this.usePercentages, this.canvasHeight);
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
        p.drawFillRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
    }
    drawBorder(p) {
        if (this.border.value() < 1) {
            return;
        }
        this.style.strokeStyle = this.colorBorder.value();
        this.style.fillStyle = this.colorBorder.value();
        this.style.lineWidth = this.border.value();
        p.drawRect((this.xAligned() - Math.floor(this.border.value() / 2)), (this.yAligned() - Math.floor(this.border.value() / 2)), this.widthInPix() + this.border.value(), this.heightInPix() + (this.border.value()), this.style);
    }
    preDraw() {
        this.style.opacity = (this.opacity.value());
    }
    postDraw() {
        this.style.opacity = 100;
    }
    yAlignedPadded() {
        return this.yAligned() + this.paddingTop.value();
    }
    xAlignedPadded() {
        return this.xAligned() + this.paddingLeft.value();
    }
    contentWidth() {
        return 0;
    }
    contentHeight() {
        return 0;
    }
}

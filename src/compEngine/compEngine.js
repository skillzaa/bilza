import CompEngineCore from "./compEngineCore.js";
export default class CompEngine extends CompEngineCore {
    constructor(compDb, pack) {
        super(compDb, pack);
    }
    preDrawNonBoxed(p) {
        this.style.opacity = (this.opacity.value());
        this.applyRotation(p);
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
    canvasWidth() {
        return this._canvasWidth;
    }
    canvasHeight() {
        return this._canvasHeight;
    }
    draw(p) {
        return true;
    }
    goto(atFrame, x, y) {
        this.x.goto(atFrame, x);
        this.y.goto(atFrame, y);
        return true;
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
    contentX() {
        return this.yAligned() + this.paddingTop.value();
    }
    contentY() {
        return this.xAligned() + this.paddingLeft.value();
    }
    applyRotation(p) {
        p.save();
        p.translate(this.xRotateAligned(), this.yRotateAligned());
        p.rotate(this.rotation.value());
        p.translate(-this.xRotateAligned(), -this.yRotateAligned());
    }
    removeRotation(p) {
        p.restore();
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
    drawBackground(p) {
        if (this.showBackground.value() == false) {
            return;
        }
        this.style.fillStyle = this.colorBackground.value();
        this.style.strokeStyle = this.colorBackground.value();
        p.drawFillRect(this.xAligned(), this.yAligned(), this.compWidth(), this.compHeight(), this.style);
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
                y = y + (this.compHeight() / 2);
                break;
            case 2:
                y = y + this.compHeight();
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
}

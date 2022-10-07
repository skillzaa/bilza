import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, AniBoolean, AniColor, } from "../../animations/animations.js";
export default class Arrow extends CompEngine {
    constructor(arrowDb, pack) {
        super(arrowDb, pack);
        this.headWidth = new AniNumber(arrowDb.headWidth);
        this.headFilled = new AniBoolean(arrowDb.headFilled);
        this.headHeight = new AniNumber(arrowDb.headHeight);
        this.x2 = new AniNumber(arrowDb.x2);
        this.y2 = new AniNumber(arrowDb.y2);
        this.lineWidth = new AniNumber(arrowDb.lineWidth);
        this.colorHead = new AniColor(arrowDb.colorHead);
        this.drawLayer = 2;
        this.color.set(arrowDb.color.value());
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.x2.update(msDelta);
        this.y2.update(msDelta);
        this.lineWidth.update(msDelta);
        this.headFilled.update(msDelta);
        this.headHeight.update(msDelta);
        this.headWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.preDrawNonBoxed(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        let verticalArrow = false;
        let lineEndX;
        if (this.x2.value() > this.x.value()) {
            lineEndX = this.x2.value() - (this.headWidth.value() - 1);
        }
        else if (this.x2.value() < this.x.value()) {
            lineEndX = this.x2.value() + (this.headWidth.value());
        }
        else {
            lineEndX = this.x2.value();
            verticalArrow = true;
        }
        let lineEndY;
        if (this.y2.value() > this.y.value()) {
            if (verticalArrow == true) {
                lineEndY = this.y2.value() - (this.headWidth.value());
            }
            else {
                lineEndY = this.y2.value() - (this.headHeight.value());
            }
        }
        else if (this.y2.value() < this.y.value()) {
            if (verticalArrow == true) {
                lineEndY = this.y2.value() + (this.headWidth.value());
            }
            else {
                lineEndY = this.y2.value() + (this.headHeight.value());
            }
        }
        else {
            lineEndY = this.y2.value();
        }
        p.drawLine(this.x.value(), this.y.value(), lineEndX, lineEndY, this.style);
        p.save();
        const rotateAngle = Math.atan2(this.y2.value() - lineEndY, this.x2.value() - lineEndX);
        p.translate(this.x2.value(), this.y2.value());
        p.rotateRad(rotateAngle);
        this.style.fillStyle = this.colorHead.value();
        this.style.strokeStyle = this.colorHead.value();
        p.beginPath();
        p.moveTo(0, 0);
        p.lineTo(-this.headWidth.value(), this.headHeight.value(), this.style);
        p.lineTo(-this.headWidth.value(), -this.headHeight.value(), this.style);
        p.lineTo(0, 0, this.style);
        if (this.headFilled.value() == true) {
            p.fill(this.style);
        }
        else {
            p.stroke();
        }
        p.restore();
        this.postDraw(p);
        return true;
    }
    compWidth() {
        return 0;
    }
    compHeight() {
        return 0;
    }
}

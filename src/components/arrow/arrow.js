import { BaseComponent, DrawLayer } from "../../bilza.js";
import { AniNumber, AniBoolean, AniColor, } from "../../animationModule/animations.js";
import Templ from "./templ.js";
import Theme from "./theme.js";
export default class Arrow extends BaseComponent {
    constructor(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        super();
        this.x.set(x1);
        this.y.set(y1);
        this.headWidth = new AniNumber(4);
        this.headFilled = new AniBoolean(true);
        this.headHeight = new AniNumber(2);
        this.x2 = new AniNumber(x2);
        this.y2 = new AniNumber(y2);
        this.lineWidth = new AniNumber(2);
        this.color.set(color);
        this.colorHead = new AniColor(color);
        this.drawLayer = DrawLayer.MiddleGround;
        this.templ = new Templ(this);
        this.theme = new Theme(this);
    }
    init(p) {
        super.init(p);
        this.headWidth.setResponsive(this.canvasWidth());
        this.headHeight.setResponsive(this.canvasWidth());
        this.x2.setResponsive(this.canvasWidth());
        this.y2.setResponsive(this.canvasHeight());
        return true;
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
    align(x, y) {
        super.align(0, 0);
    }
    alignRotate(x, y) {
        super.alignRotate(x, 0);
    }
    pointTo(second, x, y) {
        this.x2.goto(second, x);
        this.y2.goto(second, y);
    }
}

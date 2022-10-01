import Component from "../../component/component.js";
import { AniNumber, AniBoolean, AniColor, } from "../../animations/animations.js";
import Templ from "./templ.js";
import Theme from "./theme.js";
export default class Arrow extends Component {
    constructor(startTime, endTime, canvasWidth, canvasHeight, x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        super(startTime, endTime, canvasWidth, canvasHeight);
        this.x.set(x1);
        this.y.set(y1);
        this.headWidth = new AniNumber(4);
        this.headWidth.setResponsive();
        this.headFilled = new AniBoolean(true);
        this.headHeight = new AniNumber(2);
        this.headHeight.setResponsive();
        this.x2 = new AniNumber(x2);
        this.x2.setResponsive();
        this.y2 = new AniNumber(y2);
        this.y2.setResponsive();
        this.lineWidth = new AniNumber(2);
        this.color.set(color);
        this.colorHead = new AniColor(color);
        this.drawLayer = 2;
        this.templ = new Templ(this);
        this.theme = new Theme(this);
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
    align(x = null, y) {
        super.align(0, 0);
    }
    alignRotate(x = null, y) {
        super.alignRotate(x, 0);
    }
    pointTo(second, x, y) {
        this.x2.goto(second, x);
        this.y2.goto(second, y);
    }
}

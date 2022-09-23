import { BaseComponent, DrawLayer } from "../../bilza.js";
import { AniNumber, AniPerc, AniBoolean, AniColor, } from "../../animationModule/animations.js";
import Templ from "./templ.js";
import Theme from "./theme.js";
export default class Arrow extends BaseComponent {
    constructor(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        super();
        this.x.set(x1);
        this.y.set(y1);
        this.headWidth = new AniPerc(8);
        this.headFilled = new AniBoolean(true);
        this.headHeight = new AniPerc(4);
        this.x2 = new AniPerc(x2);
        this.y2 = new AniPerc(y2);
        this.lineWidth = new AniNumber(2);
        this.color.set(color);
        this.colorHead = new AniColor(color);
        this.drawLayer = DrawLayer.MiddleGround;
        this.templ = new Templ(this);
        this.theme = new Theme(this);
    }
    setRespLoc(tf = true) {
        super.setRespLoc(tf);
        if (tf == true) {
            const x2OldValue = this.x2.value();
            const y2OldValue = this.y2.value();
            this.x2 = new AniPerc(0);
            this.x2.set(x2OldValue);
            this.y2 = new AniPerc(0);
            this.y2.set(y2OldValue);
            return true;
        }
        else {
            const x2OldValue = this.x2.value();
            const y2OldValue = this.y2.value();
            this.x2 = new AniNumber(0);
            this.x2.set(x2OldValue);
            this.y2 = new AniNumber(0);
            this.y2.set(y2OldValue);
            return false;
        }
    }
    init(p) {
        super.init(p);
        this.headWidth.init(this.canvasWidth());
        this.headHeight.init(this.canvasWidth());
        if (this.x2 instanceof AniPerc && this.y2 instanceof AniPerc) {
            this.x2.init(this.canvasWidth());
            this.y2.init(this.canvasHeight());
        }
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
        p.drawLine(this.x.value(), this.y.value(), this.x2.value(), this.y2.value(), this.style);
        p.save();
        const rotateAngle = Math.atan2(this.y2.value() - this.y.value(), this.x2.value() - this.x.value());
        p.translate(this.x2.value() + 4, this.y2.value());
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
}

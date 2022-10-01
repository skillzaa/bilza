import { BaseComponent, DrawLayer } from "../bilza.js";
import { AniNumber, } from "../animationModule/animations.js";
export default class Line extends BaseComponent {
    constructor(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        super();
        this.x.set(x1);
        this.y.set(y1);
        this.x2 = new AniNumber(x2);
        this.x2.setResponsive();
        this.y2 = new AniNumber(y2);
        this.y2.setResponsive();
        this.lineWidth = new AniNumber(2);
        this.color.set(color);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    init(p) {
        super.init(p);
        this.x2.init(this.canvasWidth());
        this.y2.init(this.canvasHeight());
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.x2.update(msDelta);
        this.y2.update(msDelta);
        this.lineWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        this.style.opacity = (this.opacity.value());
        this.applyRotation(p);
        p.drawLine(this.x.value(), this.y.value(), this.x2.value(), this.y2.value(), this.style);
        this.postDraw(p);
        return true;
    }
    compWidth() {
        return Math.floor(Math.abs(this.x2.value() - this.x.value()));
    }
    compHeight() {
        return this.lineWidth.value();
    }
    align(x, y) {
        super.align(0, 0);
    }
    alignRotate(x, y) {
        super.alignRotate(x, 0);
    }
}

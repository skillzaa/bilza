import BaseComponent from "../../BaseComponent/BaseComponent.js";
import AnimatedNoBase from "../../BaseComponent/animation/aniNumber/AnimatedNoBase.js";
export default class Rect extends BaseComponent {
    constructor() {
        super();
        this.lineWidth = new AnimatedNoBase(2);
        this.color = "#000000";
    }
    init(p) {
        super.init(p);
        this.lineWidth.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.lineWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth.value();
        p.drawRect(this.props.x.value(), this.props.y.value(), this.width(), this.height(), this.style);
        return true;
    }
}

import BaseComponent from "../../BaseComponent/Basecomponent.js";
export default class Rect extends BaseComponent {
    constructor() {
        super();
        this.lineWidth = 40;
        this.color = "#000000";
        this.dynWidth = 40;
        this.dynHeight = 40;
    }
    width(p) {
        return ((p.canvasWidth() / 100) * this.dynWidth);
    }
    height(p) {
        return ((p.canvasHeight() / 100) * this.dynHeight);
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth;
        p.drawRect(this.props.x.value(), 20, this.width(p), this.height(p), this.style);
        return true;
    }
}

import BaseComponent from "../../BaseComponent/Basecomponent.js";
export default class Rect extends BaseComponent {
    constructor() {
        super();
        this.lineWidth = 2;
        this.color = "#000000";
        this.dynWidth = 20;
        this.dynHeight = 20;
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
        const borderWidthHalf = Math.ceil(this.lineWidth / 2);
        let newX = (this.p.x.value()) + borderWidthHalf;
        p.drawRect(this.props.x.value(), this.props.y.value(), this.width(p), this.height(p), this.style);
        return true;
    }
}

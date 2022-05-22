import BaseComponent from "../../BaseComponent/BaseComponent.js";
export default class Rect extends BaseComponent {
    constructor() {
        super();
        this.lineWidth = 2;
        this.color = "#000000";
        this.dynWidth = 20;
        this.dynHeight = 20;
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth;
        const borderWidthHalf = Math.ceil(this.lineWidth / 2);
        let newX = (this.p.x.value()) + borderWidthHalf;
        p.drawRect(this.props.x.value(), this.props.y.value(), this.width(), this.height(), this.style);
        return true;
    }
}

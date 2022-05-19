import BaseComponent from "../../BaseComponent/Basecomponent.js";
export default class Rect extends BaseComponent {
    constructor() {
        super();
        this.useRelativeXY = true;
        this.lineWidth = 40;
        this.color = "#000000";
        this.widthPercent = 40;
        this.heightPercent = 40;
    }
    width(p) {
        return ((p.canvasWidth() / 100) * this.widthPercent);
    }
    height(p) {
        return ((p.canvasHeight() / 100) * this.heightPercent);
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth;
        const borderWidthHalf = Math.ceil(this.lineWidth / 2);
        let newX = (this.p.x.value()) + borderWidthHalf + 1;
        let newY = (this.p.y.value()) + borderWidthHalf + 1;
        p.drawRect(newX, newY, this.width(p), this.height(p), this.style);
        return true;
    }
}

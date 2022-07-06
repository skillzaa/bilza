import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Marker extends BaseComponent {
    constructor(color = "#ffff00") {
        super();
        this.xAlign = this.XAlignOpt.Mid;
        this.yAlign = this.YAlignOpt.Mid;
        this.x.setInitValue(50);
        this.y.setInitValue(50);
        this.color = color;
    }
    widthInPix() {
        return 0;
    }
    heightInPix() {
        return 0;
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        p.drawFillRect(this.x.value(), this.y.value(), 4, 4, this.style);
        return true;
    }
}

import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class LineShape extends BaseComponent {
    constructor() {
        super();
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        p.drawFillRect(this.contentX(), this.contentY(), this.contentWidth(), this.contentHeight(), this.style);
        this.postDraw(p);
        return true;
    }
}

import { BaseComponent, AniNumber } from "../bilza.js";
export default class Rect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color.set(color);
        this.lineWidth = new AniNumber(1);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.lineWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        p.drawRect(this.contentX(), this.contentY(), this.contentWidth(), this.contentHeight(), this.style);
        this.postDraw(p);
        return true;
    }
}

import { BaseComponent } from "../Bilza.js";
export default class FrameCounter extends BaseComponent {
    constructor(color = "#008000", bgColor = "#d1d0c8") {
        super();
        this.content = "sec:00.00";
        this.color = color;
        this.bgColor = bgColor;
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.content = "sec:" + (Math.ceil(msDelta / 1000)).toString();
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.bgColor;
        this.style.strokeStyle = this.bgColor;
        p.drawFillRect(this.loc.x(), this.loc.y(), this.width(), this.height(), this.style);
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        p.drawText(this.content, this.loc.x() + 10, this.loc.y() + 10, this.style);
        return true;
    }
}

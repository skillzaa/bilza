import { BaseComponent } from "../Bilza.js";
export default class FrameCounter extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.content = "00.00";
        this.color = color;
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.content = (Math.ceil(msDelta / 1000)).toString();
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        p.drawFillRect(this.props.loc.x(), this.props.loc.y(), this.width(), this.height(), this.style);
        p.drawText(this.content, this.props.loc.x(), this.props.loc.y(), this.style);
        return true;
    }
}

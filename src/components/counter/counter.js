import { BaseComponent } from "../Bilza.js";
export default class Rect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color = color;
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        p.drawFillRect(this.props.loc.x(), this.props.loc.y(), this.width(), this.height(), this.style);
        return true;
    }
}

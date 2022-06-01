import { BaseComponent } from "../Bilza.js";
export default class FillRect extends BaseComponent {
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
        p.drawFillRect(this.loc.x(), this.loc.y(), this.width(), this.height(), this.style);
        return true;
    }
}

import Component from "../component/component.js";
import { AniNumber, } from "../animations/animations.js";
export default class Rect extends Component {
    constructor(startTime, endTime, canvasWidth, canvasHeight, color = "#000000") {
        super(startTime, endTime, canvasWidth, canvasHeight);
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
        p.drawRect(this.contentX(), this.contentY(), this.width.value(), this.height.value(), this.style);
        this.postDraw(p);
        return true;
    }
}

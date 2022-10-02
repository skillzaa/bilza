import Component from "../component/component.js";
import { AniNumber, AniBoolean, AniColor, } from "../animations/animations.js";
export default class Wave extends Component {
    constructor(id, startTime, endTime, componentPack, numberOfWaves = 3, color = "blue") {
        super(id, startTime, endTime, componentPack);
        this.numberOfWaves = new AniNumber(numberOfWaves);
        this.color.set(color);
        this.midLineColor = new AniColor("red");
        this.showMidLine = new AniBoolean(true);
        this.width.set(20);
        this.height.set(20);
    }
    draw(p) {
        this.preDraw(p);
        let increase = Math.PI * this.numberOfWaves.value() / this.width.value();
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        let oldX = this.contentX();
        let endX = this.contentX() + this.width.value();
        let oldY = (this.contentY() + (this.height.value() / 2));
        let counter = 1;
        for (let x = this.contentX(); x <= endX; x += 0.5) {
            let y = (Math.sin(counter) * this.height.value() / 2);
            y += (this.contentY() + (this.height.value() / 2));
            counter += increase;
            this.style.lineWidth = 2;
            p.beginPath();
            p.moveTo(oldX, oldY);
            p.lineTo(x, y, this.style);
            p.stroke();
            oldX = x;
            oldY = y;
        }
        if (this.showMidLine.value() == true) {
            this.style.fillStyle = this.midLineColor.value();
            this.style.strokeStyle = this.midLineColor.value();
            this.style.lineWidth = 1;
            p.beginPath();
            p.moveTo(this.contentX(), this.contentY() + (this.height.value() / 2));
            p.lineTo(this.contentX() + this.width.value(), this.contentY() + (this.height.value() / 2), this.style);
            p.stroke();
        }
        this.postDraw(p);
        return true;
    }
}

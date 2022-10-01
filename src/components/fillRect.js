import Component from "../component/component.js";
export default class FillRect extends Component {
    constructor(startTime, endTime, color = "#000000") {
        super(startTime, endTime);
        this.color.set(color);
    }
    draw(p) {
        this.style.fillStyle = "blue";
        this.style.strokeStyle = "blue";
        this.style.opacity = 100;
        p.drawFillRect(100, 100, 300, 300, this.style);
        return true;
    }
}

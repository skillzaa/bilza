import Component from "../component/component.js";
export default class Background extends Component {
    constructor(startTime, endTime, color = "#efeee3") {
        super(startTime, endTime);
        this.drawLayer = 0;
        this.color.set(color);
    }
    draw(p) {
        p.drawBackground(this.color.value());
        return true;
    }
}

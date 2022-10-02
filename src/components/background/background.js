import Component from "../../engineComponent/engineComponent.js";
export default class Background extends Component {
    constructor(startTime, endTime, componentPack, color = "#efeee3") {
        super(startTime, endTime, componentPack);
        this.drawLayer = 0;
        this.color.set(color);
    }
    draw(p) {
        p.drawBackground(this.color.value());
        return true;
    }
}

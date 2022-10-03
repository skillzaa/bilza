import EngineComponent from "../../engineComponent/engineComponent.js";
export default class Background extends EngineComponent {
    constructor(componentPack, color = "#efeee3") {
        super(componentPack);
        this.drawLayer = 0;
        this.color.set(color);
    }
    draw(p) {
        p.drawBackground(this.color.value());
        return true;
    }
}

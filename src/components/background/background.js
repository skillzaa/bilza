import EngineComponent from "../../compEngine/compEngine.js";
export default class Background extends EngineComponent {
    constructor(color = "#efeee3") {
        super();
        this.drawLayer = 0;
        this.color.set(color);
    }
    draw(p) {
        p.drawBackground(this.color.value());
        return true;
    }
}

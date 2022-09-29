import { DrawLayer } from "../design/drawLayer.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Background extends BaseComponent {
    constructor(color = "#efeee3") {
        super();
        this.drawLayer = DrawLayer.SystemBackGround;
        this.color.set(color);
    }
    draw(p) {
        p.drawBackground(this.color.value());
        return true;
    }
}

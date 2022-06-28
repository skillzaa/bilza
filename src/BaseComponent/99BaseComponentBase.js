import { DrawLayer } from "../bilza.js";
import Style from "../design/style.js";
export default class BaseComponentBase {
    constructor() {
        this.version = "0.0.1";
        this.alwaysOn = false;
        this.usePercentages = true;
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.canvasWidth = null;
        this.canvasHeight = null;
        this.selected = false;
        this.visible = true;
    }
}

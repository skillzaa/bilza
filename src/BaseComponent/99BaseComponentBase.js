import { DrawLayer, XAlignOpt, YAlignOpt, AniNumber } from "../bilza.js";
import Style from "../design/style.js";
export default class BaseComponentBase {
    constructor() {
        this.version = "0.0.1";
        this.alwaysOn = false;
        this.XAlignOpt = XAlignOpt;
        this.YAlignOpt = YAlignOpt;
        this.usePercentages = true;
        this.width = new AniNumber(10);
        this.height = new AniNumber(10);
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.canvasWidth = null;
        this.canvasHeight = null;
        this.selected = false;
        this.visible = true;
    }
}

import { DrawLayer, AniBoolean, AniNumber } from "../bilza.js";
import Style from "../design/style.js";
import { XAlignOpt } from "./designBC/xAlignOpt.js";
import { YAlignOpt } from "./designBC/yAlignOpt.js";
export default class BaseComponentBase {
    constructor() {
        this.version = "0.0.1";
        this.alwaysOn = false;
        this.XAlignOpt = XAlignOpt;
        this.YAlignOpt = YAlignOpt;
        this.xAlign = this.XAlignOpt.Left;
        this.yAlign = this.YAlignOpt.Top;
        this.xRotate = this.XAlignOpt.Left;
        this.yRotate = this.YAlignOpt.Top;
        this.usePercentages = true;
        this.width = new AniNumber(10);
        this.rotation = new AniNumber(0);
        this.opacity = new AniNumber(1);
        this.height = new AniNumber(10);
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.canvasWidth = null;
        this.canvasHeight = null;
        this.selected = false;
        this.visible = new AniBoolean(true);
    }
}

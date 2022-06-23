import { DrawLayer } from "../bilza.js";
import Style from "../design/style.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";
import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import Loc from "../loc/loc.js";
export default class BaseComponentBase {
    constructor() {
        this.version = "0_0_16";
        this.alwaysOn = false;
        this.xAlign = XAlignment;
        this.yAlign = YAlignment;
        this.offScreenXOpt = OffScreenXOpt;
        this.offScreenYOpt = OffScreenYOpt;
        this.duration = 0;
        this.insertTimeInVid = 0;
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.loc = new Loc();
        this.canvasWidth = null;
        this.canvasHeight = null;
        this.selected = false;
        this.visible = true;
        this.shadowColor = "grey";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.colorBoundingRectangle = "black";
    }
}

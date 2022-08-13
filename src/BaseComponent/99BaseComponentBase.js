import { DrawLayer } from "../bilza.js";
import { AniNumber, AniPerc, AniBoolean, AniColor, } from "../animationModule/animations.js";
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
        this.responsiveDims = true;
        this.interactive = false;
        this.border = new AniNumber(0);
        this.width = new AniNumber(10);
        this.height = new AniNumber(10);
        this.rotation = new AniNumber(0);
        this.opacity = new AniNumber(100);
        this.color = new AniColor("#000000");
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.canvasWidth = null;
        this.canvasHeight = null;
        this.selected = false;
        this.visible = new AniBoolean(true);
        this.x = new AniPerc(0, false);
        this.y = new AniPerc(0, false);
        this.paddingTop = new AniPerc(0, false);
        this.paddingBottom = new AniPerc(0, false);
        this.paddingRight = new AniPerc(0, false);
        this.paddingLeft = new AniPerc(0, false);
        this.border = new AniNumber(0);
        this.colorBackground = new AniColor("#ffffff");
        this.colorBorder = new AniColor("#000000");
        this.showBackground = new AniBoolean(false);
    }
    setResponsivePadding(tf = false) {
        this.paddingTop = new AniPerc(0, tf);
        this.paddingBottom = new AniPerc(0, tf);
        this.paddingRight = new AniPerc(0, tf);
        ;
        this.paddingLeft = new AniPerc(0, tf);
        return tf;
    }
    setResponsiveCoordinates(tf = true) {
        this.x.setResponsive(true);
        this.y.setResponsive(true);
        return tf;
    }
    setResponsiveDims(tf = true) {
        this.responsiveDims = tf;
        return tf;
    }
}

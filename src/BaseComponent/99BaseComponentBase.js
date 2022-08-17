import { DrawLayer } from "../bilza.js";
import { AniNumber, AniPerc, AniBoolean, AniColor, } from "../animationModule/animations.js";
import Style from "../design/style.js";
import { XAlignOpt } from "./designBC/xAlignOpt.js";
import { YAlignOpt } from "./designBC/yAlignOpt.js";
export default class BaseComponentBase {
    constructor() {
        this.version = "0.0.30";
        this.alwaysOn = false;
        this.XAlignOpt = XAlignOpt;
        this.YAlignOpt = YAlignOpt;
        this.xAlign = this.XAlignOpt.Left;
        this.yAlign = this.YAlignOpt.Top;
        this.xRotate = this.XAlignOpt.Left;
        this.yRotate = this.YAlignOpt.Top;
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
        this.x = new AniPerc(0);
        this.y = new AniPerc(0);
        this.paddingTop = new AniPerc(0, true);
        this.paddingBottom = new AniPerc(0, true);
        this.paddingRight = new AniPerc(0, true);
        this.paddingLeft = new AniPerc(0, true);
        this.border = new AniNumber(0);
        this.colorBackground = new AniColor("#ffffff");
        this.colorBorder = new AniColor("#000000");
        this.showBackground = new AniBoolean(false);
    }
    setRespPadding(tf = false) {
        if (tf == true) {
            this.paddingTop = new AniPerc(0);
            this.paddingBottom = new AniPerc(0);
            this.paddingRight = new AniPerc(0);
            this.paddingLeft = new AniPerc(0);
            return true;
        }
        else {
            this.paddingTop = new AniNumber(0);
            this.paddingBottom = new AniNumber(0);
            this.paddingRight = new AniNumber(0);
            this.paddingLeft = new AniNumber(0);
            return false;
        }
    }
    setRespLoc(tf = true) {
        if (tf == true) {
            this.x = new AniPerc(0);
            this.y = new AniPerc(0);
            return true;
        }
        else {
            this.x = new AniNumber(0);
            this.y = new AniNumber(0);
            return false;
        }
    }
    setRespDims(tf = true) {
        if (tf == true) {
            this.width = new AniPerc(0);
            this.height = new AniPerc(0);
            return true;
        }
        else {
            this.width = new AniNumber(0);
            this.height = new AniNumber(0);
            return false;
        }
    }
}

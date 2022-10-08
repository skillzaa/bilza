import { AniNumber, AniBoolean, AniPerc, AniColor } from "../animations/animations.js";
import Time from "./time.js";
import Style from "../pack/style.js";
export default class EngineCompCore {
    constructor(corePropsDb, pack) {
        this.charsWidth = pack.charsWidth.bind(pack);
        this._canvasWidth = pack.canvasWidth();
        this._canvasHeight = pack.canvasHeight();
        this.id = corePropsDb.id;
        if (corePropsDb.insertAction == "alwaysOn") {
            this.time = new Time(0, 1);
            this.alwaysOn = true;
        }
        else {
            this.time = new Time(corePropsDb.startTime, corePropsDb.endTime);
            this.alwaysOn = false;
        }
        this.style = new Style();
        this.border = new AniNumber(corePropsDb.border);
        this.color = new AniColor(corePropsDb.color);
        this.colorBackground = new AniColor(corePropsDb.colorBackground);
        this.colorBorder = new AniColor(corePropsDb.colorBorder);
        this.drawLayer = corePropsDb.drawLayer;
        this.height = new AniPerc(corePropsDb.height);
        this.opacity = new AniNumber(corePropsDb.opacity);
        this.paddingTop = new AniPerc(corePropsDb.paddingTop);
        this.paddingBottom = new AniPerc(corePropsDb.paddingBottom);
        this.paddingRight = new AniPerc(corePropsDb.paddingRight);
        this.paddingLeft = new AniPerc(corePropsDb.paddingLeft);
        this.rotation = new AniNumber(corePropsDb.rotation);
        this.selected = false;
        this.showBackground = new AniBoolean(corePropsDb.showBackground);
        this.visible = new AniBoolean(corePropsDb.visible);
        this.version = corePropsDb.version;
        this.width = new AniPerc(corePropsDb.width);
        this.x = new AniPerc(corePropsDb.x);
        this.y = new AniPerc(corePropsDb.y);
        this.xAlign = (corePropsDb.xAlign);
        this.yAlign = corePropsDb.yAlign;
        this.xRotate = corePropsDb.xRotate;
        this.yRotate = corePropsDb.yRotate;
    }
}

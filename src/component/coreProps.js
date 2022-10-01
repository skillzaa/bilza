import { AniNumber, AniBoolean, AniColor } from "../animations/animations.js";
export default class CoreProps {
    constructor() {
        this.id = Math.random().toString(36).slice(2);
        this.xAlign = 0;
        this.yAlign = 0;
        this.xRotate = 0;
        this.yRotate = 0;
        this.border = new AniNumber(0);
        this.colorBackground = new AniColor("white");
        this.colorBorder = new AniColor("black");
        this.color = new AniColor("black");
        this.height = new AniNumber(10);
        this.opacity = new AniNumber(100);
        this.paddingTop = new AniNumber(0);
        this.paddingBottom = new AniNumber(0);
        this.paddingRight = new AniNumber(0);
        this.paddingLeft = new AniNumber(0);
        this.rotation = new AniNumber(0);
        this.selected = false;
        this.showBackground = new AniBoolean(false);
        this.visible = new AniBoolean(true);
        this.version = "0.1.2";
        this.width = new AniNumber(10);
        this.x = new AniNumber(0);
        this.y = new AniNumber(0);
        this.drawLayer = 2;
        this.alwaysOn = false;
    }
}

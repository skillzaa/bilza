import AniNumberDb from "../animationsFacade/AniNumberDb.js";
import AniColorDb from "../animationsFacade/AniColorDb.js";
import AniBooleanDb from "../animationsFacade/AniBooleanDb.js";
export default class CorePropsDb {
    constructor(startTime, endTime, insertAction) {
        this.id = Math.random().toString(36).slice(2);
        this.startTime = startTime;
        this.endTime = endTime;
        this.insertAction = insertAction;
        if (this.insertAction == "alwaysOn") {
            this.alwaysOn = true;
        }
        else {
            this.alwaysOn = false;
        }
        this.drawLayer = 2;
        this.border = new AniNumberDb(0);
        this.colorBackground = new AniColorDb("white");
        this.colorBorder = new AniColorDb("black");
        this.color = new AniColorDb("black");
        this.height = new AniNumberDb(10);
        this.opacity = new AniNumberDb(100);
        this.paddingTop = new AniNumberDb(0);
        this.paddingBottom = new AniNumberDb(0);
        this.paddingRight = new AniNumberDb(0);
        this.paddingLeft = new AniNumberDb(0);
        this.rotation = new AniNumberDb(0);
        this.selected = false;
        this.showBackground = new AniBooleanDb(false);
        this.visible = new AniBooleanDb(true);
        this.version = "0.1.2";
        this.width = new AniNumberDb(10);
        this.x = new AniNumberDb(0);
        this.y = new AniNumberDb(0);
        this.xAlign = 0;
        this.yAlign = 0;
        this.xRotate = 0;
        this.yRotate = 0;
    }
}

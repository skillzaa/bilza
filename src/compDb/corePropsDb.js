import { AniNumberDb, AniPercDb, AniBooleanDb, AniColorDb } from "../animations/animations.js";
export default class CorePropsDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight) {
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
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
        this.height = new AniPercDb(10, this.canvasHeight());
        this.opacity = new AniNumberDb(100);
        this.paddingTop = new AniPercDb(0, this.canvasHeight());
        this.paddingBottom = new AniPercDb(0, this.canvasHeight());
        this.paddingRight = new AniPercDb(0, this.canvasWidth());
        this.paddingLeft = new AniPercDb(0, this.canvasWidth());
        this.rotation = new AniNumberDb(0);
        this.selected = false;
        this.showBackground = new AniBooleanDb(false);
        this.visible = new AniBooleanDb(true);
        this.version = "0.1.2";
        this.width = new AniPercDb(10, this.canvasWidth());
        this.x = new AniPercDb(0, this.canvasWidth());
        this.y = new AniPercDb(0, this.canvasHeight());
        this.xAlign = 0;
        this.yAlign = 0;
        this.xRotate = 0;
        this.yRotate = 0;
    }
    canvasWidth() {
        return this._canvasWidth;
    }
    canvasHeight() {
        return this._canvasHeight;
    }
}

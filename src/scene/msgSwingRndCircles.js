import { CompFactory as cf } from "../bilza.js";
import Scene from "./00scene.js";
export default class MsgSwingRndCircles extends Scene {
    constructor(startTime = 0, duration = 60) {
        super(startTime, duration);
        this.content = "Alam zeb khan";
    }
    init() {
        const t = cf.text(this.content, "#ffff00");
        t.setStartTime(this.getStartTime());
        t.duration = this.getDuration();
        t.width.set(40);
        t.paddingLeft.setInitValue(5);
        t.paddingRight.setInitValue(5);
        t.paddingTop.setInitValue(10);
        t.paddingBottom.setInitValue(10);
        t.showBackground.set(true);
        t.colorBackground.set("#000000");
        t.border.set(20);
        t.colorBorder.set("red");
        t.xAlign = t.XAlignOpt.Mid;
        t.yAlign = t.YAlignOpt.Mid;
        t.xRotate = t.XAlignOpt.Mid;
        t.yRotate = t.YAlignOpt.Top;
        t.goto(0, 50, 50);
        t.rotation.set(-25);
        t.rotation.oscillate(this.getStartTime(), this.getStartTime() + this.getDuration(), -25, 25, 0.25);
        this.push(t);
        const g = cf.frameCounter();
        g.setStartTime(this.getStartTime());
        g.duration = (this.getDuration());
        this.push(g);
        const grid = cf.staticGrid(100, 100, "red");
        grid.setStartTime(this.getStartTime());
        grid.duration = (this.getDuration());
        this.push(grid);
    }
}

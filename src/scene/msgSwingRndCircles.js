import { CompFactory as cf } from "../bilza.js";
export default class MsgSwingRndCircles {
    constructor(startTime = 0, duration = 60) {
        this.content = "Demo Content";
        this.startTime = startTime;
        this.duration = duration;
        this.comps = [];
    }
    getComps() {
        const t = cf.text(this.content, "#ffff00");
        t.setStartTime(this.startTime);
        t.duration = this.duration;
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
        t.rotation.oscillate(this.startTime, this.startTime + this.duration, -25, 25, 0.25);
        this.comps.push(t);
        const g = cf.frameCounter();
        g.setStartTime(this.startTime);
        g.duration = (this.duration);
        this.comps.push(g);
        const grid = cf.staticGrid(100, 100, "red");
        grid.setStartTime(this.startTime);
        grid.duration = (this.duration);
        this.comps.push(grid);
        return this.comps;
    }
    getEndTime() {
        return this.startTime + this.duration;
    }
}

import { CompFactory as cf } from "../bilza.js";
export default class MsgSwingRndCircles {
    constructor() {
    }
    getModule() {
        const t = cf.text("Eid Mubarak", "#ffff00");
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
        t.rotation.oscillate(1, 60, -25, 25, 0.25);
        return t;
    }
}

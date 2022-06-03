import { CompFactory as cf } from "../Bilza.js";
export default function firstClip() {
    let hdg = cf.text("Main Heading", "#008000");
    hdg.showBg = true;
    hdg.border = 5;
    hdg.colorBorder = "yellow";
    hdg.colorBg = "#008000";
    hdg.color = "#ff0000";
    hdg.loc.goto(0, 0, 0);
    hdg.duration = 10;
    return hdg;
}

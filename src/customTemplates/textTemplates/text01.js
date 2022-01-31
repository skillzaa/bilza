import Templ from "../../design/templ.js";
export default function text01(startFrame = 0) {
    let t = new Templ(0);
    t.startFrame = startFrame;
    t.fontSize = 70;
    t.x = 25;
    t.y = 10;
    t.fillStyle = "blue";
    t.shadowOffsetX = 4;
    t.shadowOffsetY = 4;
    t.shadowBlur = 4;
    t.shadowColor = "black";
    return t;
}

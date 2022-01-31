import Bilzaa2d from "../index.js";
import Templ from "../design/templ.js";

let b = new Bilzaa2d();

let t = b.addText("Bla bla");
let tr0 = t.newTransition();
tr0.x = 90;
tr0.y = 0;
tr0.fontSize = 70;
tr0.fillStyle = "blue";
tr0.shadowOffsetX = 4;
tr0.shadowOffsetY = 4;
tr0.shadowBlur = 4;
tr0.shadowColor = "black";

let tr = t.newTransition();
tr.startFrame = 5;
tr.x = 80;
tr.y = 80;

let tr2 = t.newTransition();
tr2.startFrame = 10;
tr2.x = 20;
tr2.y = 20;
b.start();
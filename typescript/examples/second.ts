import Bilzaa2d from "../index.js";
import Templ from "../design/templ.js";

let b = new Bilzaa2d();
b.components.addGrid();
let t = b.components.addText("Bla bla");
let tr0 = t.newTransition();
tr0.startFrame = 2;
tr0.x = 20;
tr0.y = 20;
tr0.fontSize = 70;
tr0.fillStyle = "blue";
tr0.shadowOffsetX = 4;
tr0.shadowOffsetY = 4;
tr0.shadowBlur = 4;
tr0.shadowColor = "black";

let tr = t.newTransition();
tr.startFrame = 5;
tr.x = 80;
tr.y = 20;

let tr2 = t.newTransition();
tr2.startFrame = 10;
tr2.x = 80;
tr2.y = 80;

let tr3 = t.newTransition();
tr3.startFrame = 15;
tr3.x = 20;
tr3.y = 80;

let tr4 = t.newTransition();
tr4.startFrame = 20;
tr4.x = 20;
tr4.y = 20;

b.start();
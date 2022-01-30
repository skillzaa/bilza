import Bilzaa2d from "../index.js";

let b = new Bilzaa2d();
let t = b.addText("Alhamdullah, Bilzaa2d finally arrived");
t.ctxData.fontSize = 40;
t.ctxData.fillStyle = "blue";
let t2 = b.addText("Some other text else where");
t2.ctxData.strokeStyle = "#d64848";
t2.ctxData.fillStyle = "#d64848";
t2.ctxData.x = 100;
t2.ctxData.y = 100;
t2.ctxData.fontSize = 70;

let g = b.addGrid();
b.add_comp(g);

let t2trans = t2.addTransition();
t2trans.startFrame = 5;
t2trans.ctxData.fontSize = 200;
let t2trans2 = t2.addTransition();
t2trans2.startFrame = 10;
t2trans2.ctxData.fontSize = 100;

b.start();
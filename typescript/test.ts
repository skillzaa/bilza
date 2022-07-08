import Bilza, { Ui,CompFactory as cf } from "./bilza.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,350);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,80,0);
bil.insert.alwaysOn(counter);

const plain = cf.text("Text Demo","#008000");
plain.goto(0,50,40);

plain.width.set(10);
plain.xAlign = plain.XAlignOpt.Left;
// plain.maxHeight = 20;
plain.width.animate(1,2,10,20);
plain.rotation.animate(4,10,0,360);
bil.insert.add(plain,0,30);
const ui = new Ui(bil);
bil.draw();

import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,350);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

const plain = cf.text("Text Demo","#008000");
plain.goto(0,50,10);

plain.width.set(10);
plain.x.xAlign = plain.XAlignOpt.Mid;
// plain.maxHeight = 20;
plain.width.animate(0,10,0,80);

bil.insert.add(plain,0,30);
const ui = new Ui(bil);
bil.draw();

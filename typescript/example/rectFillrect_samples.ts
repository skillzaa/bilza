import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,350);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

// const plain = cf.rect("#008000");
const plain = cf.rect("#008000");

plain.x.xAlign = plain.XAlignOpt.Left;
plain.goto(0,10,10);
plain.width.goto(0,60);
// plain.goto(0,10,10);
// plain.width.animate(1,4,10,80);
// plain.width.jumpBetween(1,15,10,80,50);
// plain.width.random(1,10,10,80,60);
// plain.width.vibrate(1,15,30,6,10);
plain.width.animate(1,8,10,90);
plain.height.animate(1,8,10,90);
plain.lineWidth.animate(0,10,1,20);
// plain.width.goto(5,50);
// plain.height.set(50);

// plain.width.animate(2,10,10,80);
bil.insert.add(plain,0,15);
const ui = new Ui(bil);
bil.draw();

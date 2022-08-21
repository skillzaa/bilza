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
const plain = cf.line();
// plain.x.animate(0,10,0,100);
// plain.y.animate(0,10,0,100);
plain.color.set("#008000");
plain.y2.animate(0,10,10,100);
plain.lineWidth.animate(0,10,0,100)
bil.insert.add(plain,0,15);
const ui = new Ui(bil);
bil.draw();

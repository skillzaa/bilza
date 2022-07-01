import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

let bil = new Bilza("bilza",70);
bil.resizeCanvas(800,300);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

// const plain = cf.rect("#008000");
const plain = cf.line(50,50,100,50);
// plain.x.animate(0,10,0,100);
// plain.y.animate(0,10,0,100);
plain.color = "#008000";
// plain.lineWidth.jumpBetween(0,10,1,10,20);
plain.lineWidth.set(15);
plain.x2.random(0,20,10,90,10);
plain.y2.random(0,20,10,90,10);
// plain.x2.jumpBetween(0,10,0,800,20);
// plain.y2.random(0,10,0,300,10);
// plain.y2.animate(0,10,10,100);
// plain.lineWidth.animate(0,10,0,100)
bil.insert.add(plain,0,20);
const ui = new Ui(bil);
bil.draw();

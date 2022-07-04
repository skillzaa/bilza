import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

const plain = cf.line(50,50,100,100);

plain.color = "#008000";
plain.lineWidth.set(15);

plain.x2.random(0,20,10,90,10);
plain.y2.random(0,20,10,90,10);

bil.insert.add(plain,0,20);
const ui = new Ui(bil);
bil.draw();
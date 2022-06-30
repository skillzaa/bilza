import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,350);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

const plain = cf.plainText("Plain Text:Goto demo","#008000");
plain.goto(0,10,10);

plain.fontSize.animate(0,1,10,60);

plain.fontSize.goto(4,20);

plain.fontSize.jumpBetween(5,10,30,32,5);

plain.fontSize.random(11,14,20,80,15);

plain.fontSize.vibrate(16,20,20,1,10);

bil.insert.add(plain,0,30);
const ui = new Ui(bil);
bil.draw();

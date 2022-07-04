import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.add(counter,0,20);

bil.background.color.random(0,15,50);

const txt = cf.rawText("Random Colors");
txt.goto(0,5,5);
txt.fontSize.set(70);
bil.insert.add(txt,0,20);

const ui = new Ui(bil);
bil.draw();
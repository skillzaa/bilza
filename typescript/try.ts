import Bilza, { Ui,CompFactory as cf } from "./bilza.js";

let bil = new Bilza("bilza",70);
bil.background.color.set("#031363");
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
bil.insert.alwaysOn(counter);

const comp = cf.rawText("Raw Text","#ff0000");
comp.width.animate(2,10,50,500);
bil.insert.add(comp,0,15);
const ui = new Ui(bil);
bil.draw();
import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,350);
// bil.background.color = "#000000";
//-----------------------------------------
const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

const g = cf.staticGrid(1,1,"#008000");
bil.insert.add(g,0,20);

g.cellWidth.animate(2,10,1,100);
g.cellHeight.animate(2,10,1,100);

const ui = new Ui(bil);
bil.draw();

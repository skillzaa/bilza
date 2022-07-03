import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

let bil = new Bilza("bilza",70);
bil.background.color = "#031363"
//-----------------------------------------
const g = cf.grid();
g.colorHorizontalLines = "#29346b";
g.showNumbers = false;
g.colorVerticalLines = "#29346b";
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);
const vidDuration = 15;

const comp = cf.rawText("Raw Text","#ff0000");
comp.fontSize.animate(2,10,50,500);
bil.insert.add(comp,0,vidDuration);
const ui = new Ui(bil);
bil.draw();

//////////////////////////////////////////////////////////

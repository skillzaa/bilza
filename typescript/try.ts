
import Bilza, { Ui,CompFactory as cf } from "./bilza.js";

let bil = new Bilza("bilza",70);
bil.background.color.set("#031363");
//-----------------------------------------
const g = cf.grid();
g.colorHorizontalLines = "#29346b";
g.showNumbers = false;
g.colorVerticalLines = "#29346b";
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
bil.insert.alwaysOn(counter);

const comp = cf.text("Raw Text","#ff0000");
// comp.fitTextToWidth = false;
comp.goto(0,20,20);
// comp.fontSize.set(50);
comp.width.animate(2,10,5,80);
bil.insert.add(comp,0,20);
const ui = new Ui(bil);
bil.draw();
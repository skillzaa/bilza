import Bilza, { Ui,CompFactory as cf } from "./bilza.js";


let bil = new Bilza("bilza",70);
bil.background.color.set("#031363");
//-----------------------------------------
const g = cf.grid();
g.colorHorizontalLines = "#29346b";
g.showNumbers = false;
g.colorVerticalLines = "#29346b";
bil.insert.alwaysOn(g);

bil.insert.alwaysOn(cf.frameCounter("#ff0000"));

const raw = cf.text("Raw Text","#ff0000");
raw.paddingLeft.animate(0,5,0,30);
// raw.fontSize.animate(2,10,50,500);
bil.insert.add(raw,0,15);
const ui = new Ui(bil);
bil.draw();
import Bilza, { Ui, CompFactory as cf } from "../bilza.js";
let bil = new Bilza("bilza", 70);
const g = cf.grid(10,10,);
g.showNumbers.set(false);
g.colorHorizontalLines.set("red");
g.colorVerticalLines.set("blue");
bil.insert.add(g, 0, 60);
const ui = new Ui(bil);
bil.draw();

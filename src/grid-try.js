import Bilza, { Ui, CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const g = cf.grid();
g.showNumbers = false;
g.colorHorizontalLines = "red";
g.colorVerticalLines = "blue";
bil.insert.add(g, 0, 60);
const ui = new Ui(bil);
bil.draw();

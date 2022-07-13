import Bilza, { Ui, CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.insert.alwaysOn(cf.grid("grey"));
debugger;
const rect = cf.fillRect("#008000");
rect.goto(0, 50, 50);
bil.insert.add(rect, 0, 60);
const ui = new Ui(bil);
bil.draw();

import Bilza, { Ui, CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const rect = cf.fillRect("#008000");
rect.x.animate(0, 3, 0, 90);
bil.insert.add(rect, 0, 60);
const ui = new Ui(bil);
bil.draw();

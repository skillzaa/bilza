import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240, 55, 70));
const fc = cf.frameCounter(hsl(120));
bil.insert.alwaysOn(fc);
const sq = cf.scenes.canvasBorder(0, 10, hsl(240, 30, 90));
bil.insert.addScene(sq);
const ui = new Ui(bil);
bil.draw();

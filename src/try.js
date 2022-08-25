import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const fc = cf.circle(10, hsl(0));
bil.insert.add(fc, 0, 30);
const ui = new Ui(bil);
bil.draw();

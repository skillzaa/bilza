import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const txt = cf.fillRect(hsl(240));
txt.x.set(0);
txt.y.set(50);
txt.width.random(5000, 10000, 20, 80, 10000);
bil.insert.add(txt, 0, 120);
const ui = new Ui(bil);
bil.draw();
console.log("txt", txt);

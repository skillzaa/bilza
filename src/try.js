import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const txt = cf.fillRect(hsl(240));
txt.setResponsiveCoordinates(true);
txt.x.set(10);
txt.y.set(50);
txt.width.set(10);
txt.x.oscillate(0, 18, 10, 80, 5);
bil.insert.add(txt, 0, 120);
const ui = new Ui(bil);
bil.draw();
console.log("txt", txt);

import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const comp = cf.particleSystem(20, hsl(0), 30);
bil.insert.add(comp, 0, 65);
const ui = new Ui(bil);
bil.draw();

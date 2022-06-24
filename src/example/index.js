import Bilza, { CompFactory as cf, Ui } from "../bilza.js";
import TestComp from "../components/testComp.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 350);
const g = cf.grid();
bil.insert.alwaysOn(g);
const counter = cf.frameCounter();
bil.insert.alwaysOn(counter);
const rect = new TestComp();
rect.local_x.set(200);
rect.local_y.set(200);
rect.local_x.goto(1, 900);
rect.local_x.goto(2, 500);
rect.local_x.goto(3, 100);
rect.local_x.goto(4, 700);
rect.local_x.goto(5, 0);
rect.local_x.goto(6, 500);
bil.insert.add(rect, 0, 15);
const ui = new Ui(bil);
bil.init();
bil.drawFrame(0);

import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const txt = cf.rawText("Hellow World", hsl(240));
txt.x.set(400);
txt.y.set(30);
txt.x.animate(0,6000, 400,0);

txt.x.goto(10000,100);
txt.x.goto(15000,200);
txt.x.goto(20000,300);
txt.x.goto(25000,400);
txt.x.goto(30000,500);
txt.x.goto(40000,100);
/////////////////////////
txt.y.goto(50000,50);
txt.y.goto(60000,100);
txt.y.goto(70000,150);
txt.y.goto(80000,200);
txt.y.goto(90000,250);
txt.y.goto(100000,300);

// txt.width.oscillate(0, 120, 20, 100, .15);
bil.insert.add(txt, 0, 120);
const ui = new Ui(bil);
bil.draw();
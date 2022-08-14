import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const txt = cf.rawText("Hellow World", hsl(240));
txt.x.set(40); // will be over written
txt.y.set(20);
txt.x.animate(0,6000, 80,0);

txt.x.goto(10000,10);
txt.x.goto(15000,20);
txt.x.goto(20000,30);
txt.x.goto(25000,40);
txt.x.goto(30000,50);
txt.x.goto(35_000,60);
/////////////////////////
txt.y.goto(40000,20);
txt.y.goto(45_000,30);
txt.y.goto(50_000,40);
txt.y.goto(55_000,50);
txt.y.goto(60_000,60);
txt.y.goto(65_000,70);

// txt.width.oscillate(0, 120, 20, 100, .15);
bil.insert.add(txt, 0, 120);
const ui = new Ui(bil);
bil.draw();

console.log("txt",txt);
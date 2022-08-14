import Bilza, { Ui, CompFactory as cf, hsl,kilo } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const txt = cf.rawText("Hellow World", hsl(240));
txt.x.set(40); // will be over written
txt.y.set(20);
txt.x.animate(0,6000, 80,0);

txt.x.goto(kilo(10) ,10);
txt.x.goto(kilo(15) ,20);
txt.x.goto(kilo(20) ,30);
txt.x.goto(kilo(25) ,40);
txt.x.goto(kilo(30) ,50);
txt.x.goto(kilo(35) ,60);
/////////////////////////
txt.y.goto(kilo(40), 20 );
txt.y.goto(kilo(45), 30 );
txt.y.goto(kilo(50), 40 );
txt.y.goto(kilo(55), 50 );
txt.y.goto(kilo(60), 60 );
txt.y.goto(kilo(65), 70 );

// txt.width.oscillate(0, 120, 20, 100, .15);
bil.insert.add(txt, 0, 120);
const ui = new Ui(bil);
bil.draw();

console.log("txt",txt);
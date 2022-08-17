import Bilza, { Ui, CompFactory as cf, hsl, k } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));

const txt = cf.fillRect(hsl(240));
// txt.setResponsiveCoordinates(true);
txt.x.set(0); // will be over written
txt.y.set(50);

// txt.x.goto(2,20);
// txt.x.goto(2.5,40);
// txt.x.goto(3,60);
txt.width.set(10); // will be over written
// txt.width.animate(3,9,90,10);
// txt.width.jumpBetween(2000,50_000,80,10,2000);
// txt.x.oscillate(0,10,10,90,5,10);
// txt.width.random(2,10,10,90,1);
// txt.width.oscillate(0, 120, 20, 100, .15);
bil.insert.add(txt, 0, 120);
const ui = new Ui(bil);
bil.draw();

console.log("txt",txt);
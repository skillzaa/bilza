import Bilza, { Ui, CompFactory as cf, hsl, k } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
bil.insert.alwaysOn(cf.frameCounter(hsl(0)));

const txt = cf.fillRect(hsl(240));
// txt.setResponsiveCoordinates(false);
txt.x.set(50); // will be over written
txt.y.set(50);
// txt.width.animate(3000,6000,70,10);
// txt.width.jumpBetween(2000,50_000,80,10,2000);
// txt.width.oscillate(0,18,20,80,5);
// txt.width.random(2,10,20,80,1);
// txt.width.oscillate(0, 120, 20, 100, .15);
bil.insert.add(txt, 0, 120);
const ui = new Ui(bil);
bil.draw();

console.log("txt",txt);
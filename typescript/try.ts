import Bilza, { Ui, CompFactory as cf, hsl, k } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");

// bil.insert.alwaysOn(grid);
// bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const txt = cf.fillRect( hsl(240));

txt.x.set(0);
txt.y.set(30);

txt.x.animate(0,5,0,90);
bil.insert.add(txt, 0, 15);
const ui = new Ui(bil);
bil.draw();

console.log("txt",txt);
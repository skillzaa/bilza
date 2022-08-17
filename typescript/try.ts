import Bilza, { Ui, CompFactory as cf, hsl, k } from "./bilza.js";
let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");

bil.insert.alwaysOn(grid);
// bil.insert.alwaysOn(cf.frameCounter(hsl(0)));
const txt = cf.fillRect( hsl(240));

txt.width.set(30);
txt.height.set(30);

txt.x.set(50);
txt.y.set(50);
//---first time use
txt.align(1,1);
txt.alignRotate(0,2);
// txt.x.animate(1,5,0,90);
txt.rotation.animate(1,5,0,500);
bil.insert.add(txt, 0, 15);
const ui = new Ui(bil);
bil.draw();

console.log("txt",txt);
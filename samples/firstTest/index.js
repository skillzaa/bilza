// import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
// "../../src/Bilza.js";
import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
"../00lib/Bilza_0_0_15.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
let tst = cf.rect();
tst.duration = 600;
tst.p.loc.set(0, 0, XAlignment.Left, YAlignment.Top);
bil.insert.append(tst, tst.duration);
let grid = cf.grid();
bil.insert.alwaysOn(grid);

tst.p.dynWidth.animate(0, 5, 10, 90);
tst.p.dynHeight.animate(0, 5, 10, 90);

////////////////////////////////////////////
bil.init();
bil.start();

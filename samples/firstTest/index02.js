
import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
"../../build/bilza_0_0_15.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
let grid = cf.grid();
bil.insert.alwaysOn(grid);
let tst = cf.rect();
tst.duration = 600;
// tst.p.dynWidth.animate(0, 2, 10, 20);
// tst.p.loc.animate(5, 8, 0, 50, 0, 50, XAlignment.Left, XAlignment.Mid, YAlignment.Top, YAlignment.Mid);
// tst.p.dynWidth.animate(10, 15, 20, 40);
tst.p.loc.goto(0, 0, 0, XAlignment.Left, YAlignment.Top);
tst.p.loc.goto(2, 50, 50, XAlignment.Mid, YAlignment.Mid);
tst.p.loc.goto(5, 50, 0, XAlignment.Mid, YAlignment.Top);
bil.insert.append(tst, tst.duration);
bil.init();
bil.start();

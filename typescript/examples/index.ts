import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
"../Bilza.js";
// import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
// "../00lib/Bilza_0_0_15.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);


let grid = cf.grid();
bil.insert.alwaysOn(grid);

let tst = cf.rect();
tst.duration = 600;
tst.p.loc.set(50,50, XAlignment.Mid , YAlignment.Top);
tst.p.loc.animate(2,10,0,50,0,50);
tst.p.dynWidth.animate(2,3,1,50);
bil.insert.append(tst, tst.duration);

////////////////////////////////////////////
bil.init();
bil.start();

//-----------------------------------
// tst.p.dynWidth.animate(0, 5, 10, 90);
// tst.p.dynHeight.animate(0, 5, 10, 90);

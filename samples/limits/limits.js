import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
"../../src/Bilza.js";
// import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
// "../00lib/Bilza_0_0_15.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);


let grid = cf.grid();
bil.insert.alwaysOn(grid);

let tst = cf.rect();
tst.duration = 600;
tst.p.loc.set(0, 0, XAlignment.Left, YAlignment.Top);

//---The animations must be inserted in reverse order
//-- i dont know why
tst.p.loc.animate(0,5,0,90,0,90);
tst.p.loc.animate(7,10,90,50,90,50);
tst.p.loc.animate(11,15,50,50,50,0);

bil.insert.append(tst, tst.duration);

////////////////////////////////////////////
bil.init();
bil.start();

//-----------------------------------
// tst.p.dynWidth.animate(0, 5, 10, 90);
// tst.p.dynHeight.animate(0, 5, 10, 90);

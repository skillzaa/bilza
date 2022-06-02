import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
"../../src/Bilza.js";
// import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
// "../00lib/Bilza_0_0_15.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);


let grid = cf.grid();
bil.insert.alwaysOn(grid);

let counter = cf.frameCounter();
counter.loc.goto(0,0,20);
bil.insert.alwaysOn(counter);


let tst = cf.fillRect("red");
tst.duration = 30;
tst.loc.goto(0,0, 0, XAlignment.Left, YAlignment.Top);

//---The animations
tst.loc.animate(2,6,0,90,0,90);
tst.loc.animate(7,10,90,50,90,50);
tst.loc.animate(11,15,50,50,50,0);

bil.insert.append(tst, tst.duration);

////////////////////////////////////////////
bil.init();
bil.start();

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

// tst.p.loc.goto(0,90,10,XAlignment.Mid,YAlignment.Mid);
tst.p.dynWidth.animate(0,2,10,20);
tst.p.loc.animate(3,6,
    0,50,0,50,
    XAlignment.Left,XAlignment.Mid,
    YAlignment.Top,YAlignment.Mid
    );
bil.insert.append(tst, tst.duration);

////////////////////////////////////////////
bil.init();
bil.start();

//-----------------------------------
// tst.p.dynWidth.animate(0, 5, 10, 90);
// tst.p.dynHeight.animate(0, 5, 10, 90);

import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
"../Bilza.js";


let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);


// let bc = cf.bgCircles();
// bil.insert.alwaysOn(bc);

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let tst = cf.rect();
tst.duration = 600;

tst.dynWidth.animate(0,2,10,20);
tst.loc.animate(5,8,
    0,50,0,50,
    XAlignment.Left,XAlignment.Mid,
    YAlignment.Top,YAlignment.Mid
    );
    
    tst.dynWidth.animate(10,15,20,40);    
    tst.loc.goto(17,50,50,XAlignment.Mid,YAlignment.Mid);
bil.insert.append(tst, tst.duration);

////////////////////////////////////////////
bil.init();
bil.start();

//-----------------------------------
// tst.dynWidth.animate(0, 5, 10, 90);
// tst.dynHeight.animate(0, 5, 10, 90);

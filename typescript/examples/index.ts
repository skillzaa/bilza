import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let counter = cf.frameCounter("#008000");
counter.loc.goto(0,10,20);
bil.insert.alwaysOn(counter);

let tst = cf.fillRect("red");
tst.duration = 120;

tst.loc.goto(0,0,0, XAlignment.Left, YAlignment.Top);
//---Right Top
tst.loc.animate(2,20,0,100,0,0,XAlignment.Left,
    XAlignment.Right);
//--Right Bottom    
tst.loc.animate(22,40,100,100,0,100,XAlignment.Right,
    XAlignment.Right,YAlignment.Top,YAlignment.Bot);
//--Left Bottom    
tst.loc.animate(42,60,100,0,100,100,XAlignment.Right,
    XAlignment.Left,YAlignment.Bot,YAlignment.Bot);
//--Right Top    
tst.loc.animate(62,80,0,0,100,0,XAlignment.Left,
    XAlignment.Left,YAlignment.Bot,YAlignment.Bot);

bil.insert.append(tst, tst.duration);
////////////////////////////////////////////
bil.init();
bil.start();
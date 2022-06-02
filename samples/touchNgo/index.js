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
tst.duration = 120;

/**Target
 * We have to touch all 4 corners such that the comp has to fit in the cornor
 */
//---Touch all cornors
//---Left Top in the start
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

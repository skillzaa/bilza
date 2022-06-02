import Bilza, { XAlignment,Templ, YAlignment, CompFactory as cf } from 
"../../src/Bilza.js";
// import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
// "../00lib/Bilza_0_0_15.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);


let grid = cf.grid();
bil.insert.alwaysOn(grid);

let counter = cf.frameCounter();
counter.loc.goto(0,90,0);
bil.insert.alwaysOn(counter);


// let tst = cf.text("Hello!","#008000");
let tst = Templ.textTempl.h1();
tst.showBg = true;
tst.colorBg = "#008000";
tst.color = "#ff0000";
tst.duration = 15;
tst.dynWidth.setValue(20);
tst.dynWidth.animate(2,3,20,40);

tst.loc.goto(0,0,0, XAlignment.Left, YAlignment.Top);

bil.insert.append(tst, tst.duration);
////////////////////////////////////////////
bil.init();
bil.start();


import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from 
"../Bilza_0_0_15.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);


let grid = cf.grid();
bil.insert.alwaysOn(grid);

let counter = cf.frameCounter();
counter.loc.goto(0,90,0);
bil.insert.alwaysOn(counter);

let tst = TextTempl.h1("Text Demo");
tst.showBg = true;
tst.colorBg = "#008000";
tst.color = "#ffffff";
//--Being the only appended component, duration of the videos = 10 sec
tst.duration = 10; 
tst.dynWidth.setValue(20);
tst.dynWidth.animate(2,3,20,40);

tst.loc.goto(0,0,0, XAlignment.Left, YAlignment.Top);

bil.insert.append(tst, tst.duration);
////////////////////////////////////////////
bil.init();
bil.start();

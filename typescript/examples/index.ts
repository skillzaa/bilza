import Bilza, { XAlignment,YAlignment,CompFactory as cf } from "../Bilza.js";
let bil = new Bilza("bilza");


//=======================frameCounter
let counter = cf.frameCounter("grey");
counter.goto(0,100,90,XAlignment.Right,YAlignment.Top);
counter.animate(2,10,100,100,90,10);
bil.insert.alwaysOn(counter);
//=======================Static Grid
let grid = cf.grid();
bil.insert.alwaysOn(grid);
//=========================================
let tst = cf.fillRect();
tst.color = "red";
tst.shadowsOn();
tst.duration = 60;
tst.goto(0, 50, 10, XAlignment.Mid, YAlignment.Top);
tst.animate(5,15,50,50,10,50);
bil.insert.append(tst, tst.duration);
//////////////////////////////////////////
//////////////////////////////////////////
// bil.start();
bil.init();
bil.drawFrame(10000);
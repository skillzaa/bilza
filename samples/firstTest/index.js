
// import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
// "../../build/bilza_0_0_15.js";
 import Bilza,{ XAlignment, YAlignment, CompFactory as cf } from "../../src/Bilza.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

//=========================================
let counter = cf.frameCounter("grey");
counter.p.loc.goto(0,90,90,XAlignment.Left,YAlignment.Top);
counter.p.loc.animate(2,10,90,90,90,10);
bil.insert.alwaysOn(counter);
//=========================================


let grid = cf.staticGrid();
bil.insert.alwaysOn(grid);
let c = cf.frameCounter("red");
let tst = cf.fillRect();
tst.color = "red";
tst.shadowsOn();
tst.duration = 600;
tst.p.dynWidth.animate(0, 2, 10, 20);
tst.p.loc.animate(5, 8, 0, 50, 0, 50, XAlignment.Left, XAlignment.Mid, YAlignment.Top, YAlignment.Mid);

tst.p.dynWidth.animate(10, 15, 20, 40);

tst.p.loc.goto(17, 50, 50, XAlignment.Mid, YAlignment.Mid);

// tst.lineWidth.animate(5,10,1,80);

bil.insert.append(tst, tst.duration);
bil.init();
bil.start();

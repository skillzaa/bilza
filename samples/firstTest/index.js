
// import Bilza, { XAlignment, YAlignment, CompFactory as cf } from 
// "../../build/bilza_0_0_15.js";
 import Bilza,{ XAlignment, YAlignment, CompFactory as cf } from "../../src/Bilza.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

//=========================================
let bc = cf.bgCircles(5,"#008000",2);
bc.size = 50;
bil.insert.alwaysOn(bc);
//=========================================

//=========================================
let counter = cf.frameCounter("grey");
counter.loc.goto(0,90,90,XAlignment.Left,YAlignment.Top);
counter.loc.animate(2,10,90,90,90,10);
bil.insert.alwaysOn(counter);
//=========================================
let grid = cf.staticGrid();
bil.insert.alwaysOn(grid);


//=========================================
let tst = cf.fillRect();
tst.color = "red";
tst.shadowsOn();
tst.duration = 600;
tst.loc.goto(5, 50, 50, XAlignment.Mid, YAlignment.Mid);
bil.insert.append(tst, tst.duration);
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
bil.init();
bil.start();

import Bilza, { CompFactory as cf , PresetComps,Ui } from "../bilza.js";

import TestComp from "../components/testComp.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,350);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);
const counter = cf.frameCounter();
bil.insert.alwaysOn(counter);

const rect  = new TestComp();
// rect.goto(0,0,50);
//---goto commands inbetween animation are over written.
// rect.animate(2,10,0,100,50,50,rect.xAlign.Left,rect.xAlign.Right);
rect.local_x.set(200);
rect.local_y.set(200);
rect.local_x.goto(1,900);
rect.local_x.goto(2,500);
rect.local_x.goto(3,100);
rect.local_x.goto(4,700);
rect.local_x.goto(5,0);
rect.local_x.goto(6,500);
// rect.local_x.random(0,15,10,1000,20);
// rect.local_x.jumpBetween(0,10,10,400,90);
// rect.local_x.vibrate(0,10,200,1,10);
// rect.local_y.vibrate(0,10,200,1,10);
// rect.local_x.animate(0,10,0,900);
bil.insert.add(rect,0,15);
///----------------
const ui = new Ui(bil);
// bil.start();
bil.init();
bil.drawFrame(0);
//--------------------------------------

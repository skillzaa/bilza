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
rect.local_y.set(200);
rect.local_y.vibrate(0,10,50,1,10);
rect.local_x.animate(0,10,0,900);
bil.insert.add(rect,0,15);
///----------------
const ui = new Ui(bil);
// bil.start();
bil.init();
bil.drawFrame(0);
//--------------------------------------

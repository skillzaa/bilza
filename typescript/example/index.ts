import Bilza, { Ui } from "../bilza.js";

import TestComp from "../components/testComp.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,350);
//-----------------------------------------
// const g = cf.grid();
// bil.insert.alwaysOn(g);
// const counter = cf.frameCounter();
// bil.insert.alwaysOn(counter);

const rect  = new TestComp();
// rect.goto(0,0,50);
//---goto commands inbetweeanimation are over written.
// rect.animate(2,10,0,100,50,50,rect.xAlign.Left,rect.xAlign.Right);
rect.x.set(200);
rect.y.set(200);
rect.x.goto(1,900);
rect.x.goto(2,500);
rect.x.goto(3,100);
rect.x.goto(4,700);
rect.x.goto(5,0);
rect.x.goto(6,500);
// rect.x.random(0,15,10,1000,20);
// rect.x.jumpBetween(0,10,10,400,90);
// rect.x.vibrate(0,10,200,1,10);
// rect.local_y.vibrate(0,10,200,1,10);
// rect.x.animate(0,10,0,900);
bil.insert.add(rect,0,15);
///----------------
const ui = new Ui(bil);
// bil.start();
bil.init();
bil.drawFrame(0);
//--------------------------------------

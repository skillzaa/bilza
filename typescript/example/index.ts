import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

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
// rect.goto(0,0,10);
// rect.animate(0,10,0,95,10,10);
// rect.vibrateX(0,10,50,1,5);
rect.x.vibrate(0,10,50,10,2);
rect.x.animate()
// rect.goto(0,0,0);
// rect.goto(1,10,10);
// rect.goto(2,20,20);
// rect.goto(3,30,30);
// rect.goto(4,40,40);
// rect.goto(5,50,50);
// rect.goto(6,60,60);
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

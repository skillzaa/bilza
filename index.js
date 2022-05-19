// import Bilza from "../src/Bilza.js";
import Bilza from "../../build/bilzaEngine_0_0_15.js";
import testClip from "./clip.js";
import Rect from "./src/components/rect/rect.js";
import TestComp from "./src/testComp/testComp.js";


let bil = new Bilza("bilza");
//---------------------------------
// let rect  = new Rect();
// rect.duration = 12;
// rect.color = "red";
// rect.useRelativeXY = true;
// rect.p.x.setValue(0);
// rect.p.y.setValue(0);
// rect.moveX(5,10,0,50);
let tst  = new TestComp("Auto");
tst.duration = 15;
tst.color = "red";
tst.useRelativeXY = true;
tst.p.x.setValue(0);
tst.p.y.setValue(0);
tst.moveX(2,10,0,90);
// tst.moveY(5,10,0,20);
// rect.moveX()
bil.insert.append(tst,tst.duration);

//-----------------------------
let first = testClip("first",20);
bil.insert.append(first,first.duration);
first.moveX(5,10,0,100);

//--////////////////////////////
bil.init();
bil.start();
// bil.drawInit();
///////////////////////////////

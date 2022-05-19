// import Bilza from "../src/Bilza.js";
import Bilza from "../../build/bilzaEngine_0_0_15.js";
import testClip from "./clip.js";
import Rect from "./src/components/rect/rect.js";



let bil = new Bilza("bilza");
//---------------------------------
let rect  = new Rect();
rect.duration = 12;
rect.color = "red";
rect.useRelativeXY = false;
rect.p.x.setValue(50);
rect.p.y.setValue(50);
// rect.moveX(5,10,0,200);
// rect.moveX()
bil.insert.append(rect,rect.duration);

//-----------------------------
let first = testClip("first",0);
bil.insert.append(first,first.duration);
first.moveX(5,10,0,200);

//--////////////////////////////
bil.init();
bil.start();
// bil.drawInit();
///////////////////////////////

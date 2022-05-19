// import Bilza from "../src/Bilza.js";
import Bilza from "../../build/bilzaEngine_0_0_15.js";
import testClip from "./clip.js";
import Rect from "./src/components/rect/rect.js";



let bil = new Bilza("bilza");
//---------------------------------
let rect  = new Rect();
rect.duration = 12;
rect.color = "red";
rect.p.x.setValue(10);
rect.p.y.setValue(10);
rect.moveX(5,10,0,200);
// rect.moveX()
bil.insert.append(rect,rect.duration);

//-----------------------------
let first = testClip("first",0);
bil.insert.append(first,first.duration);
first.moveX(5,10,0,200);

let tst = testClip("Bilal",50); 
bil.insert.append(tst,tst.duration);
tst.moveX(5,10,0,200);

let tst02 = testClip("Mustafa",100); 
bil.insert.append(tst02,tst02.duration);
tst02.moveX(5,10,0,400);

let tst03 = testClip("tst03",150); 
bil.insert.append(tst03,tst03.duration);
tst03.moveX(5,10,0,200);
//--////////////////////////////
bil.init();
bil.start();
// bil.drawInit();
///////////////////////////////

// import Bilza from "../src/Bilza.js";
import Bilza from "../../build/bilzaEngine_0_0_15.js";
import clip01 from "./clip01.js";
import clip02 from "./clip02.js";
// import Rect from "./src/components/rect/rect.js";
import TestComp from "./src/testComp/testComp.js";

let bil = new Bilza("bilza");
//---------------------------------

let tst  = new TestComp("offX");
tst.duration = 15;
tst.color = "red";
tst.p.x.setValue(0);
debugger;
// tst.p.y.setValue(0);
// tst.moveX(2,10,100,tst.offScreenXOpt.XLeft);
// tst.moveY(2,10,tst.offScreenYOpt.YBot,tst.offScreenYOpt.YTop);

tst.moveX(2,10,tst.offScreenXOpt.XLeft,tst.offScreenXOpt.XRight);
bil.insert.append(tst,tst.duration);

//--////////////////////////////
bil.init();
bil.start();
// bil.drawInit();
///////////////////////////////

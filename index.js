import Bilza from "./src/Bilza.js";
// import Bilza from "../../build/bilzaEngine_0_0_15.js";
import Rect from "../../src/components/rect/rect.js";
import TestComp from "../../src/testComp/testComp.js";

let bil = new Bilza("bilza");
//---------------------------------

let test2 = new TestComp("static");
test2.props.y = 40;
bil.insert.alwaysOn(test2);
let tst  = new TestComp("ok");
tst.duration = 25;
// tst.color = "red";
tst.p.x.setValue(50);

// tst.moveX(1,5,tst.offScreenXOpt.XLeft,tst.offScreenXOpt.XRight);
// tst.moveX(5,10,tst.offScreenXOpt.XRight,tst.offScreenXOpt.XLeft);
// tst.moveX(10,15,tst.offScreenXOpt.XLeft,tst.offScreenXOpt.XRight);
// tst.moveX(15,20,tst.offScreenXOpt.XRight,tst.offScreenXOpt.XLeft);


bil.insert.append(tst,tst.duration);


//--////////////////////////////
bil.init();
bil.start();
// bil.drawInit();
///////////////////////////////

import Bilza from "../Bilza.js";
// import Bilza from "../../build/bilzaEngine_0_0_15.js";
// import Rect from "../components/rect/rect.js";
import TestComp from "../testComp/testComp.js";

let bil = new Bilza("bilza");

let tst = new TestComp("New");
tst.duration = 60;

// tst.xx.setValue(300);
// tst.yy.setValue(200);

tst.xx.animate(2,10,0,300);
tst.yy.animate(2,10,0,300);

// tst.moveX(2,6,0,50);
// tst.moveX(2,8,tst.offScreenXOpt.XRight,tst.offScreenXOpt.XLeft);
// tst.moveX(5,10,tst.offScreenXOpt.XRight,tst.offScreenXOpt.XLeft);
// tst.moveX(10,15,tst.offScreenXOpt.XLeft,tst.offScreenXOpt.XRight);
// tst.moveX(15,20,tst.offScreenXOpt.XRight,tst.offScreenXOpt.XLeft);
bil.insert.append(tst,tst.duration);
//--////////////////////////////
bil.init();
bil.start();
// bil.drawInit();
///////////////////////////////
// let wd = 10;
// let inter = setInterval(function(){
// tst.dynWidth +=1;
// wd++;
// },20);
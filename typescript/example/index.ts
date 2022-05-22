import Bilza from "../Bilza.js";
// import Bilza from "../../build/bilzaEngine_0_0_15.js";
// import Rect from "../components/rect/rect.js";
import TestComp from "../testComp/testComp.js";

let bil = new Bilza("bilza");

let tst = new TestComp("New");
tst.duration = 60;

// tst.xx.setValue(300);
// tst.yy.setValue(200);

tst.p.x.animate(2,10,0,300);
tst.p.y.animate(2,10,0,300);

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
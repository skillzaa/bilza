import Bilza from "../Bilza.js";
// import Bilza from "../../build/bilzaEngine_0_0_15.js";
import Rect from "../components/rect/rect.js";
import TestComp from "../testComp/testComp.js";
import Grid from "../components/grid/grid.js";
// import StaticGrid from "../components/staticGrid/staticGrid.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,400);
// let tst = new TestComp("New");
let tst = new Rect( );
tst.p.x.xAlign = tst.p.x.xAlignmentOptions.Left;
tst.duration = 600;
tst.p.x.setValue(500);
tst.p.x.animate(2,3,0,50);

let grid = new Grid();
// grid.cellWidth = 100;
// grid.flagDrawNumbers = true;
// grid.fontSize = 25;

// tst.p.y.setValue(50);
// tst.lineWidth.animate(5,7,1,900);

// tst.p.widthDyn.animate(5,8,0,90);
// tst.p.y.animate(2,10,0,300);

bil.insert.append(tst,tst.duration);
bil.insert.alwaysOn(grid);
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
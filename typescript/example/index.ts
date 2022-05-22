import Bilza from "../Bilza.js";
// import Bilza from "../../build/bilzaEngine_0_0_15.js";
import Rect from "../components/rect/rect.js";
import TestComp from "../testComp/testComp.js";
import Grid from "../components/grid/grid.js";
import StaticGrid from "../components/staticGrid/staticGrid.js";

let bil = new Bilza("bilza");

// let tst = new TestComp("New");
let tst = new Rect( );
tst.duration = 600;

// let grid = new StaticGrid();
// grid.cellWidth = 100;
// grid.flagDrawNumbers = true;
// grid.fontSize = 25;

tst.p.x.setValue(500);
// tst.p.y.setValue(50);

// tst.p.x.animate(2,4,0,500);
tst.p.widthDyn.animate(2,3,0,90);
// tst.p.y.animate(2,10,0,300);

bil.insert.append(tst,tst.duration);
// bil.insert.alwaysOn(grid);
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
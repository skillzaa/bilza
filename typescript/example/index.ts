import Bilza from "../Bilza.js";
import { OffScreenXOpt } from "../BaseComponent/animation/aniNumber/xAxis/OffScreenXOpt.js";
import { OffScreenYOpt } from "../BaseComponent/animation/aniNumber/yAxis/OffScreenYOpt.js";
// import Bilza from "../../build/bilzaEngine_0_0_15.js";
import Rect from "../components/rect/rect.js";
// import TestComp from "../testComp/testComp.js";
import Grid from "../components/grid/grid.js";
import { XAlignment } from "../BaseComponent/animation/aniNumber/xAxis/xAlignment.js";
import { YAlignment } from "../BaseComponent/animation/aniNumber/yAxis/yAlignment.js";
// import StaticGrid from "../components/staticGrid/staticGrid.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,400);
// let tst = new TestComp("New");
let tst = new Rect( );
// tst.p.x.xAlign = tst.p.x.xAlignmentOptions.Mid;
tst.duration = 600;
//---test 01
// tst.p.y.setValue(10);
// tst.p.x.animate(2,8,OffScreenXOpt.XLeft ,50);
// tst.p.y.animate(2,8,OffScreenYOpt.YTop ,50);
//---test 02
// tst.p.x.xAlign = tst.p.x.xAlignmentOptions.Left;
// tst.p.y.yAlign = tst.p.y.yAlignmentOptions.Top;
// tst.p.x.setValue();
// tst.p.y.setValue(0);
// tst.p.x.animate(3,8,0,50);
// tst.p.y.animate(3,8,0,50);


// tst.p.loc.set(50,50,XAlignment.Left);
// tst.p.loc.set(50,50,XAlignment.Mid);
// tst.p.loc.set(OffScreenXOpt.XLeft,50,XAlignment.Left,YAlignment.Top,90);

tst.p.loc.set(0,0,XAlignment.Left,YAlignment.Top);

// tst.p.loc.animate(2,4,0,50,0,50,
// XAlignment.Left,XAlignment.Mid,
// YAlignment.Top,YAlig nment.Mid);
tst.p.dynWidth.animate(0,5,10,90);
tst.p.dynHeight.animate(0,5,10,90);
bil.insert.append(tst,tst.duration);
let grid = new Grid();
bil.insert.alwaysOn(grid);
//--////////////////////////////-|-\\\\\\\
bil.init();
bil.start();
// bil.drawInit();
///////////////////////////////
// let wd = 10;
// let inter = setInterval(function(){
// tst.dynWidth +=1;
// wd++;
// },20);
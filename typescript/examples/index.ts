import Bilza, { XAlignment, YAlignment,TextTempl,AniPre, CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);


let grid = cf.grid();
bil.insert.alwaysOn(grid);

let counter = cf.frameCounter();
counter.loc.goto(0,0,20);
bil.insert.alwaysOn(counter);


let tst = cf.text("123--123","#000fff");
tst.duration = 30;
tst.loc.goto(0,10,10);
// tst.useDynWidth = true;
// tst.dynWidth.setValue(10);
// tst.dynWidth.animate(2,3,10,20);
// AniPre.LinStop(tst,4,7,200,60);
// AniPre.LinRout(tst,2,15,50);
// AniPre.TinStop(tst,2,6,50,100);
// AniPre.BinTout(tst,0,3,50);//-------------error
AniPre.TinBout(tst,2,8,50);
// tst.dynWidth.animate(2,4,20,70);
//---The animations
//--enter from (out of screen) and stop before exit
// tst.loc.animate(2,10,0,100,0,0,XAlignment.Right,XAlignment.Right);
//--enter from out of screen and exist out of screen
// tst.loc.animate(2,10,0,100,0,0,XAlignment.Right,XAlignment.Left,YAlignment.Top,YAlignment.Top);

bil.insert.append(tst, tst.duration);

////////////////////////////////////////////
bil.init();
bil.start();
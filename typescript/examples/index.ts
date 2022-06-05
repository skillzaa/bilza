import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from "../Bilza.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
 
let grid = cf.grid();
bil.insert.alwaysOn(grid);

let counter = cf.frameCounter();
counter.loc.goto(0,0,20);
bil.insert.alwaysOn(counter);

let tst = cf.text("Text Comp");
tst.duration = 500;
tst.colorBg = "crimson";
tst.color = "#ffffff";
tst.paddingTop.setValue(0);
tst.paddingBottom.setValue(0);
tst.paddingLeft.setValue(0);
tst.paddingRight.setValue(0);


tst.fontSize = 80;

tst.useDynWidth = true;
tst.dynWidth.setValue(50);
tst.useMaxHeight = true;
tst.maxHeight = 40;
tst.loc.goto(0,50,50, XAlignment.Mid, YAlignment.Mid);


bil.insert.append(tst, tst.duration);
////////////////////////////////////////////
bil.init();
bil.start();
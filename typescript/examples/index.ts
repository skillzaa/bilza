import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

let grid = cf.grid();
bil.insert.alwaysOn(grid);

let c = cf.frameCounter();
c.loc.goto(0,90,0);
bil.insert.alwaysOn(c);

let mt = cf.text("ABC","#000000");
mt.border.setValue(4);
mt.fontSize.setValue(70);
mt.loc.goto(0,10,10,XAlignment.Left,YAlignment.Top);
mt.duration = 50;
//-------------------------------
mt.paddingLeft.setValue(10);
mt.paddingTop.setValue(10);
mt.paddingRight.setValue(10);
mt.paddingBottom.setValue(10);
//---------------
//---------------------------------------------
bil.insert.append(mt,mt.duration);
////////////////////////////////////////////
bil.init();
bil.start();

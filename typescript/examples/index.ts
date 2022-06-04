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
mt.loc.goto(0,10,10);
mt.duration = 50;
//-------------------------------
mt.paddingLeft.setValue(0);
mt.paddingTop.setValue(0);
mt.paddingRight.setValue(0);
mt.paddingBottom.setValue(0);
//---------------
mt.paddingLeft.animate(2,5,0,400);
mt.paddingLeft.animate(6,10,400,0);

mt.paddingRight.animate(12,15,0,400);
mt.paddingRight.animate(17,20,400,0);

mt.paddingTop.animate(22,25,0,300);
mt.paddingTop.animate(27,30,300,0);

mt.paddingBottom.animate(32,35,0,300);
mt.paddingBottom.animate(37,40,300,0);

//---------------------------------------------
bil.insert.append(mt,mt.duration);
////////////////////////////////////////////
bil.init();
bil.start();

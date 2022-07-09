import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
bil.resizeCanvas(800,400);
bil.background.color.set("#031363");
//-----------------------------------------
const t = cf.text("Eid Mubarak", "#ffff00");

t.width.set(30);
t.paddingLeft.setInitValue(5);
t.paddingRight.setInitValue(5);
t.paddingTop.setInitValue(10);
t.paddingBottom.setInitValue(10);
//..........................
t.showBackground.set(true);
t.colorBackground.set("#000000")
t.border.set(20);
t.colorBorder.set("red");
//--------------------------------
t.xAlign = t.XAlignOpt.Mid;
t.yAlign = t.YAlignOpt.Mid;
t.xRotate = t.XAlignOpt.Mid;
t.yRotate = t.YAlignOpt.Top;
t.goto(0,50,50);
//--------------------------------
//--------------------------------
t.rotation.set(-25);
t.rotation.oscillate(1,60,-25,25,0.25);
//--------------------------------------------
bil.insert.add(t,0,60);
//--------------------------------------------
const ui = new Ui(bil);
bil.draw();


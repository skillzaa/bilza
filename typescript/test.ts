import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
bil.resizeCanvas(800,400);
bil.background.color.set("#031363");
//-----------------------------------------
const t = cf.text("Text Padding Demo", "#ffff00");
t.width.set(50);
t.showBackground.set(true);
t.colorBackground.set("#000000")
t.border.set(4);
t.colorBorder.set("red");
t.goto(0,0,0);
//..............
t.paddingLeft.animate(2,5,0,45);
t.paddingLeft.animate(7,10,45,0);
t.paddingRight.animate(7,10,0,45);
//..............
t.paddingTop.animate(12,15,0,40);

t.paddingTop.animate(17,20,40,0);
t.paddingBottom.animate(17,20,0,40);

bil.insert.add(t,0,30);
//--------------------------------------------
const ui = new Ui(bil);
bil.draw();


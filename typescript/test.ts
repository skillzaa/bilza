import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
bil.resizeCanvas(800,400);
bil.background.color.set("#031363");
//-----------------------------------------
/**
 * The width of text component is calculated as following
 * : Both paddings (percentage) + both borders (in pix) + width (text width is again in percentage).
 *  text.paddingLeft.value() + text.paddingRight.value() + text.width.value() +  (text.border.value() * 2)
 * 
 */
const t = cf.text("Text Padding Demo", "#ffff00");

t.width.set(60);
t.paddingLeft.setInitValue(10);
t.paddingRight.setInitValue(10);

t.paddingTop.setInitValue(20);
t.paddingBottom.setInitValue(20);
//..........................
t.showBackground.set(true);
t.colorBackground.set("#000000")
t.border.set(20);
t.colorBorder.set("red");
//--------------------------------
t.xAlign = t.XAlignOpt.Mid;
t.yAlign = t.YAlignOpt.Mid;
t.goto(0,50,50);
//--------------------------------
//--------------------------------
t.content.goto(1,"Text Random Color Change")
t.color.random(1,10,40);

t.content.goto(11,"Background Random Color Change")
t.colorBackground.random(11,20,40);

t.content.goto(21,"Border Random Color Change")
t.colorBorder.random(21,30,40);

t.content.goto(31,"Canvas Background Random Color Change")
bil.background.color.random(31,40,40);
//--------------------------------------------
bil.insert.add(t,0,45);
//--------------------------------------------
const ui = new Ui(bil);
bil.draw();


import Bilza, { Ui,CompFactory as cf } from "./bilza.js";



let bil = new Bilza("bilza", 70);
bil.background.color.set("#330505");

const g = cf.grid();
bil.insert.alwaysOn(g);

const circle = cf.circle("red");

circle.xAlign = circle.XAlignOpt.Mid;
circle.yAlign = circle.YAlignOpt.Mid;
circle.xRotate = circle.XAlignOpt.Mid;
circle.yRotate = circle.YAlignOpt.Mid;


circle.showBackground.set(true);
circle.colorBackground.set("green");

//--Set Commands
circle.paddingLeft.set(2);
circle.paddingRight.set(2);
circle.paddingTop.set(2);
circle.paddingBottom.set(2);

circle.x.set(0);
circle.y.set(50);
circle.width.set(10);
circle.border.set(2);
circle.colorBorder.set("yellow");

//--Animate Commands
circle.x.animate(1, 5, 0, 100);
circle.x.animate(6, 10, 100, 50);

circle.width.animate(12, 20, 0, 100);
circle.width.animate(22, 30, 100, 25);
circle.rotation.animate(32,40,0,2000);

bil.insert.add(circle, 0, 50);
const ui = new Ui(bil);
bil.draw();


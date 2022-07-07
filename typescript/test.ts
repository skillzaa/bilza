import Bilza, { Ui,CompFactory as cf } from "./bilza.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,500);
bil.background.color.set("#330505");
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const circle = cf.circle("red");
circle.xAlign = circle.XAlignOpt.Mid;
circle.yAlign = circle.YAlignOpt.Mid;

circle.x.setInitValue(0);
circle.y.setInitValue(50);

circle.width.set(10);

circle.x.animate(2,10,0,100);
circle.goto(11,50,50);
circle.width.animate(12,20,0,100);
circle.width.animate(22,30,100,0);
bil.insert.add(circle,0,40);


const ui = new Ui(bil);
bil.draw();
//----------------------

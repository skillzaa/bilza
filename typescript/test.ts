import Bilza, { Ui,CompFactory as cf } from "./bilza.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,500);
// bil.background.color.set("#182b89");
//----------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const hdg = cf.text("Particle System","red");
hdg.colorBorder.set("blue");
hdg.x.setInitValue(50);
hdg.y.setInitValue(50);
hdg.xAlign = hdg.XAlignOpt.Mid;
hdg.yAlign = hdg.YAlignOpt.Mid;
// hdg.paddingLeft.setInitValue(20);
// hdg.paddingLeft.animate(2,4,20,0);
// hdg.paddingRight.animate(2,4,0,20);
hdg.width.set(30);
hdg.border.animate(0,5,0,20);
hdg.rotation.animate(6,20,0,2000);
// hdg.paddingLeft.animate(2,4,0,10);
// hdg.paddingTop.animate(5,8,0,10);
// hdg.paddingRight.animate(9,12,0,10);
// hdg.paddingBottom.animate(13,16,0,10);
// hdg.x.setInitValue(100);
// hdg.xAlign = hdg.XAlignOpt.Right;
bil.insert.add(hdg,0,60);

const ui = new Ui(bil);
bil.draw();
//----------------------

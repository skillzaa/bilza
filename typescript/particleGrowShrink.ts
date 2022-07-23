import Bilza, { Ui,CompFactory as cf,hsl } from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set("#182b89");

const g = cf.grid();
bil.insert.alwaysOn(g);

const hdg = cf.text("Particle System", "red");
hdg.width.set(30);
hdg.x.set(100);
hdg.xAlign = hdg.XAlignOpt.Right;
bil.insert.alwaysOn(hdg);


const ps = cf.particleSystem(10,hsl(0),90);
ps.xAlign = ps.XAlignOpt.Mid ;
ps.yAlign = ps.YAlignOpt.Mid ;
ps.x.set(50);
ps.y.set(50);

ps.particleSize.set(5);
ps.border.set(2);

ps.colorBorder.set(hsl(0));
ps.showBackground.set(true);
ps.colorBackground.set(hsl(60))
ps.width.set(50);
ps.height.set(50);
ps.opacity.set(80);
bil.insert.add(ps, 0, 25);

ps.particleSize.animate(1,10,12,44);
ps.particleSize.animate(11,15,44,12);
///////////////////////////////////////
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////

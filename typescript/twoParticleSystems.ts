import Bilza, { Ui,CompFactory as cf,hsl } from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set("#182b89");

const hdg = cf.text("Particle System", "red");
hdg.width.set(30);
hdg.x.set(100);
hdg.xAlign = hdg.XAlignOpt.Right;
bil.insert.alwaysOn(hdg);


const ps = cf.particleSystem(20,hsl(0),30);
ps.x.set(5);
ps.y.set(20);

ps.particleSize.set(5);
ps.border.set(2);

ps.colorBorder.set(hsl(0));
ps.showBackground.set(true);
ps.colorBackground.set(hsl(60))
ps.width.set(40);
ps.height.set(70);
ps.opacity.set(80);
bil.insert.add(ps, 0, 25);

///////////////////////////////////////
const ps2 = cf.particleSystem(10,hsl(120),120);
ps2.x.set(55);
ps2.y.set(20);

ps2.particleSize.set(16);
ps2.border.set(2);

ps2.colorBorder.set(hsl(120));
ps2.showBackground.set(true);
ps2.colorBackground.set(hsl(240))
ps2.width.set(40);
ps2.height.set(70);
ps2.opacity.set(80);
bil.insert.add(ps2, 0, 25);
///////////////////////////////////////
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////

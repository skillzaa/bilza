import Bilza, { Ui,CompFactory as cf,hsl } from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.background.color.set(hsl(240,100,18));
bil.insert.alwaysOn(cf.grid(hsl(60,50,30)));

const fill = cf.fillRect(hsl(30));
fill.xAlign = fill.XAlignOpt.Mid;
fill.yAlign = fill.YAlignOpt.Mid;
fill.x.set(50);
fill.y.set(50);
fill.width.set(50);
fill.height.set(50);
bil.insert.add(fill,0,30);
///////////////////////////////////////
const line = cf.line(50,50,25,25);
line.color.set(hsl(120));
line.lineWidth.set(10);
bil.insert.alwaysOn(line);
/////////////////////////////////////////////////////
line.x2.animate(1_000,5000,25,75);
line.y2.animate(6_000,10_000,25,75);
line.x2.animate(11_000,15_000,75,25);
line.y2.animate(16_000,20_000,75,25);
/////////////////////////////////////////////////////
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////

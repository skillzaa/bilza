import Bilza, { Ui,CompFactory as cf } from "./Bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(500,200);
bil.insert.alwaysOn(cf.frameCounter());
bil.insert.alwaysOn(cf.grid());

// const txt = cf.fillRect("#008000");
const txt = cf.rawText("#008000");
const txt02 = cf.fillRect("#FFF000");
txt02.goto(0,50,50);
txt02.width.set(20);
txt02.height.set(20);
txt02.xAlign = txt.XAlignOpt.Mid;
txt02.yAlign = txt.YAlignOpt.Mid;

bil.insert.alwaysOn(txt02);

txt.goto(0,0,50);
txt.width.set(20);
txt.height.set(20);

txt.rotation.animate(0,10,0,2000);
bil.insert.add(txt,0,20);

txt.xRotate = txt.XAlignOpt.Mid;
txt.yRotate = txt.YAlignOpt.Bot;

txt.xAlign = txt.XAlignOpt.Mid;
txt.yAlign = txt.YAlignOpt.Mid;
txt.x.animate(0,20,0,100);
// txt.y.vibrate(0,20,50,1,0);
const ui = new Ui(bil);
// bil.draw();
bil.start();


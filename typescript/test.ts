import Bilza, { Ui,CompFactory as cf } from "./bilza.js";

let bil = new Bilza("bilza",70);
bil.background.color.set("#151f59")
// bil.resizeCanvas(500,200);

bil.insert.alwaysOn(cf.frameCounter());

const rect = cf.fillRect("#FF0000");
rect.width.set(70);
rect.height.set(70);

rect.xAlign = rect.XAlignOpt.Mid;
rect.yAlign = rect.YAlignOpt.Mid;

rect.goto(0,50,50);

rect.opacity.set(0);
rect.opacity.animate(0,5,0,100);

bil.insert.add(rect,0,15);
//------------------------------

// const txt = cf.rawText("Opacity Demo");
const txt = cf.text("Opacity Demo");
txt.width.set(50);
txt.goto(0,50,50);

txt.xAlign = txt.XAlignOpt.Mid;
txt.yAlign = txt.YAlignOpt.Mid;

txt.opacity.set(0);
txt.opacity.animate(5,10,0,100);

bil.insert.alwaysOn(txt);

const ui = new Ui(bil);
bil.draw();
//////////////////////////////////////

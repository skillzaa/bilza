import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from "../Bilza.js";
let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);
 
const g = cf.grid();
bil.insert.alwaysOn(g);



let tst = cf.text("123-123");
tst.duration = 500;
tst.showBg = true;
tst.colorBg = "crimson";
tst.color = "#ffffff";


tst.fontSize = 100;

// tst.useDynWidth = true;
// tst.dynWidth.setValue(50);
// tst.useMaxHeight = true;
// tst.maxHeight = 40;
// tst.loc.goto(0,20,20, XAlignment.Left, YAlignment.Top);
tst.loc.goto(0,50,50, XAlignment.Mid, YAlignment.Mid);


bil.insert.append(tst, tst.duration);
////////////////////////////////////////////
bil.init();
bil.start();
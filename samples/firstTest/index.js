import Bilza,{ XAlignment, YAlignment, CompFactory as cf } from "../../src/Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,400);

//=========================================
let counter = cf.frameCounter("grey");
counter.loc.goto(0,90,90,XAlignment.Left,YAlignment.Top);
counter.loc.animate(2,10,90,90,90,10);
bil.insert.alwaysOn(counter);
//=========================================
let grid = cf.grid();
bil.insert.alwaysOn(grid);

//=========================================
let text = cf.text("Rise Again");
text.duration = 600;
text.showBg = true;
text.loc.animate(2,10,0,50,0,50,XAlignment.Left,XAlignment.Mid,YAlignment.Top,YAlignment.Mid);
// text.dynWidth.animate(2,10,40,60);
// bil.insert.alwaysOn(line);
bil.insert.append(text, text.duration);

//=========================================
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
bil.init();
bil.start();

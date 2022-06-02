import Bilza,{ XAlignment, YAlignment, CompFactory as cf } from "../../src/Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,400);

//===================The frame Counter  Component
let counter = cf.frameCounter("grey");
counter.loc.goto(0,90,90,XAlignment.Left,YAlignment.Top);
counter.loc.animate(2,10,90,90,90,10);
bil.insert.alwaysOn(counter);
//==================The Grid Component
let grid = cf.grid();
bil.insert.alwaysOn(grid);
//==================The Text Component
let text = cf.text("Dear Sir Ajmal");
//--This will decide the duaration of the video
text.duration = 20; 
text.showBg = true;
text.colorBg = "crimson";
text.color = "white";
text.loc.animate(2,10,0,50,0,50,XAlignment.Left,XAlignment.Mid,YAlignment.Top,YAlignment.Mid);
bil.insert.append(text, text.duration);
//=========================================
//////////////////////////////////////////
bil.init();
bil.start();
//////////////////////////////////////////

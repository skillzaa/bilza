import Bilza, { XAlignment,YAlignment,CompFactory as cf } from "../Bilza.js";

let bil = new Bilza("bilza");
// bil.resizeCanvas(1000,400);

//===================The frame Counter  Component
let counter = cf.frameCounter("#000fff");


// counter.loc.animate(2,10,90,90,90,10);
bil.insert.alwaysOn(counter);
//==================The Grid Component
let grid = cf.grid();
bil.insert.alwaysOn(grid);
//==================The Text Component
let text = cf.text("Hello World");
//--This will decide the duaration of the video
text.duration = 20; 
text.showBg = true;
text.border.setValue(5);
text.colorBorder = "green";
text.colorBg = "crimson";
text.color = "white";
text.goto(0,50,50,XAlignment.Mid,YAlignment.Mid);
// text.loc.animate(3,6,100,0,50,50,XAlignment.Right,XAlignment.Left,YAlignment.Mid,YAlignment.Mid);
bil.insert.append(text, text.duration);
//=========================================
//////////////////////////////////////////
bil.start();
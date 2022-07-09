import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
bil.background.color.set("#031363");
//-----------------------------------------
//--Grid template redcross
const g = cf.grid();
g.colorHorizontalLines = "#29346b";
g.colorNumbers = "#ffffff";
g.colorVerticalLines = "#29346b";
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);
const vidDuration = 26;

bil.insert.add(getAnimatedHdg("First Heading",2,6),0,vidDuration);
bil.insert.add(getAnimatedHdg("Second Heading",8,12),0,vidDuration);
bil.insert.add(getAnimatedHdg("Third Heading",14,18),0,vidDuration);
bil.insert.add(getAnimatedHdg("Fourth Heading",20,24),0,vidDuration);
const ui = new Ui(bil);
bil.draw();

function getAnimatedHdg(content="Demo Text",startTime=2,returnTime = 10,topY=5){
const Ystart = 100;    
const cmp = cf.text(content,"#ff0000");
cmp.yAlign = cmp.YAlignOpt.Top;
cmp.maxHeight = 20;
cmp.xAlign = cmp.XAlignOpt.Mid;
cmp.border.set(1);

cmp.x.goto(0,0);
cmp.y.goto(0,Ystart);
cmp.width.goto(0,5);
//---Moving Up
cmp.x.animate(startTime,startTime + 1,0,50);
cmp.y.animate(startTime,startTime + 1,Ystart,topY);
cmp.width.animate(startTime,startTime + 1,5,50);
//---Moving Down
cmp.x.animate(returnTime,returnTime + 1,50,90);
cmp.y.animate(returnTime,returnTime + 1,topY,Ystart);
cmp.width.animate(returnTime,returnTime + 1,50,0);
return cmp; 
}

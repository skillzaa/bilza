import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
bil.resizeCanvas(800,300);
//-----------------------------------------
const g = cf.grid();
g.cellWidthPerc = 50;
g.cellHeightPerc = 50;
g.colorHorizontalLines = "red";
g.colorVerticalLines = "red";
g.lineWidthHorizontal = 2;
g.lineWidthVertical = 2;
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

const cmp = cf.text("Text Demo","#008000");
// const cmp = cf.plainText("Text Demo","#ff0000");
//--fontSize is effective only in plainText where as text uses percentages
// cmp.fontSize.set(200);
cmp.maxHeight = 20;
cmp.x.xAlign = cmp.XAlignOpt.Mid;
cmp.border.set(1);

cmp.x.goto(0,0);
cmp.y.goto(0,90);
cmp.width.goto(0,5);

cmp.x.animate(2,3,0,50);
cmp.y.animate(1,3,10,90);
cmp.width.animate(1,3,50,10);



bil.insert.add(cmp,0,15);
const ui = new Ui(bil);
bil.draw();
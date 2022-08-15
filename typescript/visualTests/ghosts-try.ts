import Bilza, { Ui,CompFactory as cf,hsl } from "../bilza.js";

let bil = new Bilza("bilza", 70);
bil.resizeCanvas(800,640);
//-----
const fc = cf.frameCounter();
fc.goto(0,70,0)
bil.insert.alwaysOn(fc);

// const grid = cf.grid("red");
// bil.insert.alwaysOn(grid);

const pic = cf.pic("../images/ghosts.png",100,100);
bil.insert.add(pic,0,60);
/////////////////////////////////////////////////////
const emoji = cf.spriteSheet("../images/ghosts.png",95,128,6,6);
// emoji.x.animate(2,20,0,100);
emoji.border.set(2);
emoji.colorBorder.set("red");
emoji.xAlign = emoji.XAlignOpt.Mid;
emoji.yAlign = emoji.YAlignOpt.Mid;
emoji.xRotate = emoji.XAlignOpt.Mid;
emoji.yRotate = emoji.YAlignOpt.Mid;
emoji.leftExtraPix = 12;
emoji.goto(0,50,50);
// // emoji.showBackground.set(true);
// emoji.colorBackground.set(hsl(240,100,95));
// emoji.width.set(100);
// emoji.height.set(100);
// //--keep in mind rows and columns are zero based like arrays
emoji.gotoImage(0,0,0);
emoji.gotoImage(1,0,1);
// emoji.gotoImage(1,1,1);
// emoji.gotoImage(2,1,2);
// emoji.gotoImage(2,2,2);
// emoji.gotoImage(0,2,2);
bil.insert.add(emoji,0,60);
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////


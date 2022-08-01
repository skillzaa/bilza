import Bilza, { Ui,CompFactory as cf,hsl,PremadeSpriteSheets } from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,100,25));
//-----
const fc = cf.frameCounter();
fc.goto(0,70,0)
bil.insert.alwaysOn(fc);

const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);

/////////////////////////////////////////////////////
// const emoji = new SpriteSheet("../images/emotions.png",72,72,16,10);

const emoji = PremadeSpriteSheets.emoji();

emoji.border.set(2);
emoji.colorBorder.set("red");
emoji.xAlign = emoji.XAlignOpt.Mid;
emoji.yAlign = emoji.YAlignOpt.Mid;
emoji.xRotate = emoji.XAlignOpt.Mid;
emoji.yRotate = emoji.YAlignOpt.Mid;

emoji.colorBackground.set(hsl(240,100,95));

bil.insert.add(emoji,0,60);
//-------------------------------------
emoji.defineImage("ghost",4,6);
emoji.gotoImageName(0,"ghost");

//--keep in mind rows and columns are zero based like arrays
emoji.gotoImage(0,0,0);
emoji.gotoImage(1,1,1);
emoji.gotoImage(2,2,2);
emoji.gotoImage(3,3,3);
emoji.gotoImage(4,4,4);
emoji.gotoImage(5,5,5);
emoji.gotoImage(6,6,6);
emoji.gotoImage(7,7,7);
emoji.gotoImage(8,8,8);
emoji.gotoImage(9,6,2);
// --important  -- this triggers a compile time error.
emoji.gotoImage(11,11,11);


///=============================================
emoji.x.animate(0,10,0,50);
emoji.x.vibrate(12,20,50,4,5);

emoji.y.animate(0,10,0,50);
emoji.y.vibrate(12,20,50,4,5);

emoji.rotation.animate(22,30,0,1000);
emoji.rotation.goto(30,0);
/////////////////////////////////////////////////////
emoji.width.animate(31,40,70,300);
emoji.width.animate(41,50,300,70);

const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////

